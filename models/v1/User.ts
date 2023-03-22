import Sequelize from "sequelize";
import jwt from "jsonwebtoken"
import UserAttributes from "@interfaces/UserAttributes";
import { database } from "@universe/v1/models/database";

const User = database.define<any, UserAttributes>(
  "Users",
  {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: Sequelize.STRING,
    },
    last_name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    mobile: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    roleid: {
      type: Sequelize.STRING,
    },
  },
);

User.prototype.getJWTToken = function () {
  return jwt.sign({ roleid: this.roleid }, 'aabhvagvagfabhjakmabuavayvaavyavagagfafgavavgagv', {
   expiresIn: "15d",
 });
};

User.sync().then(() => {
 console.log("User table synced");
});

export default User;