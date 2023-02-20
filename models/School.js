import Sequelize from "sequelize";
import { database } from "../config/database.js";

const School = database.define(
  "Schools",
  {
    name: {
      type: Sequelize.STRING,
    },
    city: {
      type: Sequelize.STRING,
    },
    state: {
      type: Sequelize.STRING,
    },
    country: {
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

School.sync().then(() => {
  console.log("Role table synced");
});

export default School;
