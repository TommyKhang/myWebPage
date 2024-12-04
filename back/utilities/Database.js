const dotenv = require('dotenv');
dotenv.config();
const { Sequelize } = require('sequelize');

// Validate required environment variables
const requiredEnvVars = ['ORACLE_DATABASE', 'ORACLE_USER', 'ORACLE_PASSWORD', 'ORACLE_HOST', 'ORACLE_PORT'];
requiredEnvVars.forEach((varName) => {
  if (!process.env[varName]) {
    console.error(`Missing required environment variable: ${varName}`);
    process.exit(1);
  }
});

const sequelize = new Sequelize(
  process.env.ORACLE_DATABASE,
  process.env.ORACLE_USER,
  process.env.ORACLE_PASSWORD,
  {
    host: process.env.ORACLE_HOST,
    port: process.env.ORACLE_PORT,
    dialect: 'oracle',
    logging: false,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1); // Exit if the connection fails
  }
})();

module.exports = sequelize;
