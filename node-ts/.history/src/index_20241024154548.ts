import express, { response, Request, Response, json, Router } from "express";
import { UserController } from "./controllers/UserController";
import { router } from "./routes";

const userController = new UserController();

export const server = express();

server.use(json());
server.use(router)

server.listen(5000, () => {
  console.log("Server ir running on port 5000");
});

server.get("/", (request: Request, response: Response) => {
});

