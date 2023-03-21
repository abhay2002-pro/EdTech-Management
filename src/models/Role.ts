import Sequelize from "sequelize";
import { database } from "../config/database";
import RolesAttributes from "../interfaces/RoleAttributes";


const Roles = database.define<any, RolesAttributes>("Roles", {
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

Roles.sync().then(() => {
  console.log("Roles table synced");
});

export default Roles;
