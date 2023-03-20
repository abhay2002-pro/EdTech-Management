import Sequelize from "sequelize";
import { database } from "../config/database";

interface RolesAttributes {
  id: string;
  name: string;
  scopes: string[];
}

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
