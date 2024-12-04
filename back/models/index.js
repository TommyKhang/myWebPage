'use strict';

const fs = require('fs');
const path = require('path');
const sequelize = require('../utilities/Database'); // Importing the initialized sequelize instance
const basename = path.basename(__filename);
const db = {};

// Read all model files in the current directory and initialize them
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && 
      file !== basename && 
      file.slice(-3) === '.js' && 
      file.indexOf('.test.js') === -1 
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize);
    db[model.name] = model;
  });

// Set up associations if they exist
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Export the database object containing all models and the sequelize instance
db.sequelize = sequelize;

module.exports = db;
