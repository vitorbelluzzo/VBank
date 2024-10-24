import express, { Request, Response, json } from "express";
import { router } from "./routes";

export const server = express();
server.use(json());
server.use(router)

server.listen(5000, () => {
  console.log("Server ir running on port 5000");
});

server.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Vbank API" });
});

