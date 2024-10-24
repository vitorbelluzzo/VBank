import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {
  createUser = (request: Request, response: Response) => {
    const user = request.body;
    if (!user.name || !user.email) {
      return response
        .status(400)
        .json({ message: "Bad request: name or email invalid" });
    }

    const userService = new UserService();
    userService.createUser(user.name, user.email);
    response.status(201).json({ message: "User created successfully"  });
  };

  getUser = (request: Request, response: Response) => {
    
    const userService = new UserService();
    if (userService.getAllUsers().length === 0) {
      return response.status(404).json({ message: "No users found" });
      
    }
    const users = userService.getAllUsers();
    return response.status(200).json({ users });
  };
}
