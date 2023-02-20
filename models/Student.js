import Sequelize from "sequelize";
import { database } from "../config/database.js";

const Student = database.define(
  "Students",
  {
    name: {
      type: Sequelize.STRING,
    },
    userid: {
      type: Sequelize.STRING,
    },
    schoolid: {
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

Student.sync().then(() => {
  console.log("Student table synced");
});

export default Student;
