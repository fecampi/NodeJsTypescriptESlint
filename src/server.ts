import express, { Request, Response } from "express";

const app = express();

app.get("/", (request: Request, response: Response) => {
  return response.json({ message: "hello world!" });
});

app.listen(3333, () =>
  console.log("Server ins running!! -> http://localhost:3333")
);
