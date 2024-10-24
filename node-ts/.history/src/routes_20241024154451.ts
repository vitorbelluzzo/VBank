import { Router } from 'express';
import { UserController } from './controllers/UserController';
import { server } from './index' ;

export const router = Router();

const userController = new UserController()

server.get("/user", userController.getUser);
server.post("/user", userController.createUser);