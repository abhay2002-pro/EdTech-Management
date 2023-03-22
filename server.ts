import roleRouter from "@api/v1/role";
import Database from "@loaders/v1/database";
import Env from "@loaders/v1/env";
import express from "express";
import { Application } from "express";

const server = async(): Promise<Application >=>{
    const app = express();

    //Loaders
    Env.Loader();
    Database.Loader();


    //Router
    app.use("/route", roleRouter);
    return app;
}

export default server;