import express, { response, Request, Response, json } from "express";

const server = express();

server.use(json());

server.listen(5000);

server.get("/", (request: Request, response: Response) => {
  response.status(200).json({ message: "Vbank API" });
});

server.post("/user", (request: Request, response: Response) => {
  const body = request.body;
  console.log(body);
  response.status(201).json({ message: "Usuário criado " });
});
