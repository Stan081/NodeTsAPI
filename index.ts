import 'dotenv/config';
import 'module-alias/register';
import App from './app';
import validateEnv from '@/utils/validateEnv';
import UserController from '@/resources/controllers/user.controller';
import EventController from '@/resources/controllers/event.controller';

validateEnv();

const app = new App(
    [
        new UserController(), new EventController()
    ],
    Number(process.env.PORT),
);

app.listen();
