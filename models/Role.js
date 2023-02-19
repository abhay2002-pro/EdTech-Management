import Sequelize from 'sequelize';
import { database } from "../config/database.js";

const Role = database.define('Role', {
  name: {
    type: Sequelize.STRING
  },
  scopes: {
    type: Sequelize.STRING
  },
});

Role.sync().then(() => {
  console.log('Role table created');
});

export default Role;