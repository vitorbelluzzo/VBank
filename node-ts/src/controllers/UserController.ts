import { Request, Response } from "express";

const db = [
  {
    name: "sophia",
    email: "sophia@email.com",
  },
];

export class UserController {
  createUser = (request: Request, response: Response) => {
    const user = request.body;
    db.push(user);
    console.log(db);
    response.status(201).json({ message: "Usuário criado " });
  };
}
