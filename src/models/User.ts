import Sequelize from "sequelize";
import { database } from "../config/database";
import jwt from "jsonwebtoken"

interface UserAttributes {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  mobile: string;
  password: string;
  roleid: string;
}


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
  return jwt.sign({ roleid: this.roleid }, 'abcgfyhhvgxtfxetfgctrfcgcgytgvfgghgcf', {
   expiresIn: "15d",
 });
};

User.sync().then(() => {
 console.log("User table synced");
});

export default User;