import express, { response, Request, Response, json } from "express";
import { UserController } from "./controllers/UserController";

const userController = new UserController();

const server = express();

server.use(json());

server.listen(5000, () => {
  console.log("Server ir running on port 5000");
});

server.get("/", (request: Request, response: Response) => {
  response.status(200).json({ message: "Vbank API" });
});

server.get("/user", userController.getUser);
server.post("/user", userController.createUser);
