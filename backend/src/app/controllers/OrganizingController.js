import Meetup from '../models/Meetup';
import File from '../models/File';

class OrganizingController {
  async index(req, res) {
    const meetups = await Meetup.findAll({
      where: {
        user_id: req.userId,
      },
      order: ['date'],
      include: {
        model: File,
        as: 'file',
        attributes: ['id', 'path', 'url'],
      },
    });

    return res.json(meetups);
  }
}

export default new OrganizingController();
