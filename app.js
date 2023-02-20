import express from "express";
import { config } from "dotenv";
import ErrorMiddleware from "./middlewares/Error.js";

config({
  path: "./config/config.env",
});

const app = express();

// middlewares
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// adding routes
import role from "./routes/roleRoutes.js";
import user from "./routes/userRoutes.js";
import school from "./routes/schoolRoutes.js";
import student from "./routes/studentRoutes.js";

app.use("/", role);
app.use("/", user);
app.use("/", school);
app.use("/", student);

export default app;

app.use(ErrorMiddleware);
