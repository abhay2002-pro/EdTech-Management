import express from "express";
import ErrorMiddleware from "./middlewares/Error.js";

const app = express();

// middlewares
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

export default app;

app.use(ErrorMiddleware);
