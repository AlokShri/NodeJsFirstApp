const Sequelize = require('sequelize');

const sequelize = new Sequelize('testbd', 'root', 'alok', {
  host: 'localhost',
  dialect: 'mysql' 
});
 
module.exports = sequelize;

