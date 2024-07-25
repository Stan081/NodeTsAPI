import { Router, Request, Response, NextFunction } from 'express'
import Controller from '@/utils/interfaces/controller.interface';
import HttpException from '@/utils/exceptions/http.exception';
import validationMiddleware from'@/middleware/validation.middleware';
import validate from '@/resources/validations/user.validation';
import UserService from '@/resources/services/user.service';

class UserController implements Controller {
    public path = '/users';
    public router = Router();
    private UserService = new UserService();
   
    constructor() {
        this.initialiseRoutes();
    }

    private initialiseRoutes(): void {
        this.router.post(
            `${this.path}/start/:id`,
            validationMiddleware(validate.createUser),
            this.createUser
        );
        this.router.get(
            `${this.path}/:id`,
            validationMiddleware(validate.getUserByEmail),
            this.getUserByEmail
        );
    }

    private createUser = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) : Promise<Response | void > => {
        try {
            const userData = req.body;
            const user = await this.UserService.createUser(userData);
            res.status(201).json({ user });
        } catch (error: any) {
            next(new HttpException(400, error.message))
        }
    };

    private getUserByEmail = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) : Promise<Response | void > => {
        try {
            const userEmail = req.body;
            const user = await this.UserService.getUserByEmail(userEmail);
            res.status(200).json({ user });
        } catch (error: any) {
            next(new HttpException(400, error.message))
        }
    }
}

export default UserController