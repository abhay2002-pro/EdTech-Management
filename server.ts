import roleRouter from "@api/v1/role";
import Database from "@loaders/v1/database";
import Env from "@loaders/v1/env";
import express from "express";
import { createHandler } from 'graphql-http/lib/use/express';
import { schema } from './schema';
import { Application } from "express";

const server = async(): Promise<Application >=>{
    const app = express();

    //Loaders
    Env.Loader();
    Database.Loader();


    //Router
    app.all("/graphql", createHandler({schema}));
    return app;
}

export default server;