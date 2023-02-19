import Sequelize from "sequelize";
import { database } from "../config/database.js";

const Role = database.define(
  "Roles",
  {
    name: {
      type: Sequelize.STRING,
    },
    scopes: {
      type: Sequelize.ARRAY(Sequelize.STRING),
    },
  },
  {
    timestamps: true,
    createdAt: "created",
    updatedAt: "updated",
    hooks: {
      beforeValidate: (role, options) => {
        console.log("---------------------------- ", role);
        console.log("21");
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

Role.sync().then(() => {
  console.log("Role table created");
});

export default Role;
