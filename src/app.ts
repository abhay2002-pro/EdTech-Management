import express, { Application, Request, Response } from "express";

const app: Application = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

import user from './routes/userRoutes';
import student from './routes/studentRoutes';
import school from './routes/schoolRoutes';
import role from './routes/roleRoutes';

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "EdTech Management" });
});

app.use('/', user);
app.use('/', student);
app.use('/', school);
app.use('/', role);

export default app;
