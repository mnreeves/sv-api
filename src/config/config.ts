import dotenv from 'dotenv';

const pathEnvFile = process.cwd() + `/.env`;
dotenv.config({ path: pathEnvFile });


export const Config = {
  applicationPort: process.env.APPLICATION_PORT ?? 420,
  dbName: process.env.DB_NAME ?? 'gorgeous',
  dbUser: process.env.DB_USER ?? 'root',
  dbPassword: process.env.DB_PASSWORD ?? 'password',
};
