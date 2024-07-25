import { Router, Request, Response, NextFunction } from 'express'
import Controller from '@/utils/interfaces/controller.interface';
import HttpException from '@/utils/exceptions/http.exception';
import validationMiddleware from'@/middleware/validation.middleware';


class EventsController {
    public path = '/users';
    public router = Router();
    
   
    constructor() {
        this.initialiseRoutes();
    }

    private initialiseRoutes(): void {
        
    }

}


export default EventsController;