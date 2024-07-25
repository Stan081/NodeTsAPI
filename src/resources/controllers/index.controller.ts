import UserController from '@/resources/controllers/user.controller';
import EventsController from './event.controller';

const controllers = [
    new UserController(),
    new EventsController()
]

export default controllers