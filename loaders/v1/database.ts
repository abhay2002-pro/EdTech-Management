import Role from "@models/v1/Role";
import School from "@models/v1/School";
import Student from "@models/v1/Student";
import User from "@models/v1/User";
import { collections } from "@schema/v1/meta";
import { database } from "@universe/v1/models/database";
import { ModelStatic } from "sequelize";

class Database {
  static models: Record<typeof collections[number], ModelStatic<any>>;
  static ListOfModels = [User, Role, School, Student];

  static async Loader(): Promise<void> {
    try {
      await database.authenticate();
      console.log(`Connected to database.`);

      const models: Record<string, ModelStatic<any>> = {};
      for (const model of Database.ListOfModels) {
        models[model.name] = model;
        models[model.tableName] = model;
      }
      Database.models = models;

      await database.sync({ force: true });
    } catch (err) {
      console.log(err);
    }
  }

  static async Close(): Promise<void> {
    try {
      await database.close();
    } catch (ex) {
      console.log(ex);
    }
  }
}

export default Database;
