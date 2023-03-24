import { database } from "@universe/v1/models/database";
import Sequelize, { UUIDV4 } from "sequelize";
import RolesAttributes from "@interfaces/RoleAttributes";

const Role = database.define<any, RolesAttributes>("Roles", {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: UUIDV4
    // autoIncrement: true,
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
