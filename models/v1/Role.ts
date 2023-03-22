import { database } from "@universe/v1/models/database";
import Sequelize from "sequelize";
import RolesAttributes from "@interfaces/RoleAttributes";

const Role = database.define<any, RolesAttributes>("Roles", {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  scopes: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  }
});

Role.sync().then(() => {
  console.log("Roles table synced");
});

export default Role;
