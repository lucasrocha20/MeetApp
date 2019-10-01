import * as Yup from 'yup';
import { startOfHour, isBefore } from 'date-fns';

import { Op } from 'sequelize';

import Subscription from '../models/Subscription';
import Meetup from '../models/Meetup';
import User from '../models/User';
import File from '../models/File';

import InscriptionMail from '../jobs/InscriptionMail';
import Queue from '../../lib/Queue';

class SubscriptionController {
  async index(req, res) {
    const subscriptions = await Subscription.findAll({
      where: {
        user_id: req.userId,
      },
      include: [
        {
          model: Meetup,
          attributes: [
            'id',
            'title',
            'date',
            'localization',
            'user_id',
            'file_id',
          ],
          where: {
            date: { [Op.gt]: new Date() },
          },
          required: true,
          include: [
            {
              model: User,
              attributes: ['id', 'name'],
            },
            {
              model: File,
              as: 'file',
              attributes: ['id', 'path', 'url'],
            },
          ],
        },
      ],

      order: [[Meetup, 'date']],
    });

    return res.json(subscriptions);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      user_id: Yup.number(),
      // meetup_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id } = req.params;

    const user = await User.findByPk(req.userId);
    const meetup = await Meetup.findByPk(id, {
      include: [User],
    });

    if (meetup.user_id === req.userId) {
      return res
        .status(400)
        .json({ error: 'User organizer can not register in the same event' });
    }

    const hourStart = startOfHour(meetup.date);
    if (isBefore(hourStart, new Date())) {
      return res.status(400).json({
        error: 'You can not sign up for an event that has passed',
      });
    }

    const registerMeetup = await Subscription.findOne({
      where: {
        user_id: req.userId,
        meetup_id: req.params.id,
      },
    });

    if (registerMeetup) {
      return res.status(401).json({ error: 'User is already subscribed' });
    }

    const checkDate = await Subscription.findOne({
      where: {
        user_id: req.userId,
      },
      include: [
        {
          model: Meetup,
          required: true,
          where: {
            date: meetup.date,
          },
        },
      ],
    });

    if (checkDate) {
      return res
        .status(401)
        .json('It is not possible to sign up for an event at the same time');
    }

    const meetupInscription = await Subscription.create({
      user_id: req.userId,
      meetup_id: req.params.id,
    });

    Queue.add(InscriptionMail.key, {
      meetup,
      user,
    });

    return res.json(meetupInscription);
  }

  async destroy(req, res) {
    const subscription = await Subscription.findByPk(req.params.id);

    if (!subscription) {
      return res.status(400).json({ error: 'Id not found' });
    }

    await subscription.destroy();

    return res.json();
  }
}

export default new SubscriptionController();
