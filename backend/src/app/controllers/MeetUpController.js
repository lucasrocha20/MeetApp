import * as Yup from 'yup';
import { Op } from 'sequelize';
import {
  startOfHour,
  startOfDay,
  endOfDay,
  parseISO,
  isBefore,
} from 'date-fns';

import Meetup from '../models/Meetup';
import User from '../models/User';
import File from '../models/File';

class MeetUpController {
  async index(req, res) {
    const page = req.query.page || 1;
    const meetups = await Meetup.findAll({
      where: {
        date: {
          [Op.between]: [
            startOfDay(parseISO(req.query.date)),
            endOfDay(parseISO(req.query.date)),
          ],
        },
      },
      include: [
        {
          model: User,
          attributes: ['name', 'email'],
        },
        {
          model: File,
          as: 'file',
          attributes: ['id', 'path', 'url'],
        },
      ],
      limit: 10,
      offset: 10 * page - 10,
    });

    return res.json(meetups);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      localization: Yup.string().required(),
      date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json('Validation fails');
    }

    const { title, description, localization, date, file_id } = req.body;

    // Check date
    const hourStart = startOfHour(parseISO(date));
    if (isBefore(hourStart, new Date())) {
      return res.status(400).json({ error: 'Past dates are not permitted' });
    }

    const checkDate = await Meetup.findOne({
      where: {
        date,
      },
    });

    if (checkDate) {
      return res.status(400).json({ error: 'Time already filled' });
    }

    const meetup = await Meetup.create({
      title,
      description,
      localization,
      date,
      user_id: req.userId,
      file_id,
    });

    return res.json(meetup);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      // id: Yup.number().required(),
      title: Yup.string(),
      description: Yup.string(),
      localization: Yup.string(),
      date: Yup.date(),
      file_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json('Validation fails');
    }

    const meetup = await Meetup.findByPk(req.params.id);

    if (meetup.user_id !== req.userId) {
      return res
        .status(400)
        .json("You are not allowed to edit another user's meetup");
    }

    const hourStart = startOfHour(parseISO(meetup.date));
    if (isBefore(hourStart, new Date())) {
      return res
        .status(400)
        .json({ error: 'Past dates are not permitted update!' });
    }

    await meetup.update(req.body);

    const {
      id,
      title,
      description,
      localization,
      date,
      file_id,
      file,
    } = await Meetup.findByPk(req.params.id, {
      include: [
        {
          model: File,
          as: 'file',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json({
      id,
      title,
      description,
      localization,
      date,
      file_id,
      file,
    });
  }

  async destroy(req, res) {
    const meetup = await Meetup.findByPk(req.params.id);

    if (!meetup) {
      return res.status(400).json({ error: 'Id not found' });
    }

    if (meetup.user_id !== req.userId) {
      return res
        .status(401)
        .json("You are not allowed to delete another user's meetup");
    }

    const hourStart = startOfHour(meetup.date);

    if (isBefore(hourStart, new Date())) {
      return res
        .status(400)
        .json({ error: 'Past dates are not permitted delete' });
    }

    await meetup.destroy();

    return res.json();
  }
}

export default new MeetUpController();
