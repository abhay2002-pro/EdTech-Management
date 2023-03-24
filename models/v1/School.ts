import Sequelize from "sequelize";
import { database } from "@universe/v1/models/database";
import SchoolAttributes from "@interfaces/SchoolAttributes";

const School = database.define<any, SchoolAttributes>("Schools", {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    // autoIncrement: true,
  },
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
});

School.sync().then(() => {
  console.log("School table synced");
});

export default School;