import Sequelize from "sequelize";
import { database } from "../config/database.js";
import jwt from "jsonwebtoken"

const User = database.define(
  "Users",
  {
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
  {
    timestamps: true,
    createdAt: "created",
    updatedAt: "updated",
    hooks: {
      beforeValidate: (role, options) => {
        if (role.isNewRecord) {
          role.created = new Date();
          role.updated = null;
        } else {
          role.updated = new Date();
        }
      },
    },
  }
);

User.prototype.getJWTToken = function () {
   return jwt.sign({ id: this.id }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
};

User.sync().then(() => {
  console.log("User table synced");
});

export default User;
