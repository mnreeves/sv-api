import { Config } from '../config/config';
import { Sequelize } from 'sequelize';

const { dbName, dbUser, dbPassword } = Config;

export const sequelizeConnection = new Sequelize(
  dbName,
  dbUser,
  dbPassword,
  {
    dialect: 'mysql',
    logging: false,
    timezone: '+07:00'
  }
);

export default async function bootstrapDatabaseAuthenticate() {
  try {
    await sequelizeConnection.authenticate();
    console.log('connection to database successfully authenticated');
  } catch (error: any) {
    console.log(`Error happened: ${error.message}`);
  }
}
