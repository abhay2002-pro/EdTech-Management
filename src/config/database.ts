import { Sequelize } from "sequelize-typescript";

export const database = new Sequelize("edtech", "postgres", "Abhay@123", {
    host: "localhost",
    dialect: "postgres",
})
