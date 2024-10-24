import express, { Request, Response, json } from "express";
import { UserController } from "./controllers/UserController";
import { router } from "./routes";

const userController = new UserController();

export const server = express();

server.use(json());
server.use(router)

server.listen(5000, () => {
  console.log("Server ir running on port 5000");
});

server.get("/", (req: Request, response: Response) => {
  response.status(200).json({ message: "Vbank API" });
});

