import { database } from "@universe/v1/models/database";
import Sequelize from "sequelize";
import StudentAttributes from "@interfaces/StudentAttributes";

const Student = database.define<any, StudentAttributes>("Students", {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  userid: {
    type: Sequelize.STRING,
  },
  schoolid: {
    type: Sequelize.STRING,
  },
});

Student.sync().then(() => {
  console.log("Student table synced");
});

export default Student;
