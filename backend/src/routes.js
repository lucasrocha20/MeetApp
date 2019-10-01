import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import MeetUpController from './app/controllers/MeetUpController';
import OrganizingController from './app/controllers/OrganizingController';
import SubscriptionController from './app/controllers/SubscriptionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store); // Criar user
routes.post('/session', SessionController.store); // Login user

routes.use(authMiddleware);

routes.put('/users', UserController.update); // Update user

routes.get('/meetups/', MeetUpController.index); // List MeetUp
routes.post('/meetups', MeetUpController.store); // Create MeetUp
routes.put('/meetups?date:string', MeetUpController.update); // Update MeetUp
routes.delete('/meetups/:id', MeetUpController.destroy); // Delete Meetup

routes.get('/organizing', OrganizingController.index);

routes.get('/subscription', SubscriptionController.index);
routes.post('/subscription/:id', SubscriptionController.store); // Subscription Meetup
routes.delete('/subscription/:id', SubscriptionController.destroy);

routes.post('/files', upload.single('file'), FileController.store); // Up File
export default routes;
