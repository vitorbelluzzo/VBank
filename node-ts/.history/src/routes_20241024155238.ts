import { Router } from 'express';
import { UserController } from './controllers/UserController';
import { server } from './index' ;

export const router = Router();
const userController = new UserController()

router.get("/user", userController.getUser);
router.post("/user", userController.createUser);