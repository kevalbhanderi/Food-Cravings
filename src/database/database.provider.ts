import { Sequelize } from 'sequelize-typescript';
import { Users } from 'src/entities/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.DATABASE_HOST,
        port: +process.env.DATABASE_PORT,
        password: process.env.DATABASE_PASSWORD,
        username: process.env.DATABASE_USERNAME,
        database: process.env.DATABASE_NAME,
        storage: ':memory:',

        logging: false,
        pool: {
          max: 100,
          min: 0,
          acquire: 30000,
          idle: 5000,
        },
      });

      await sequelize.addModels([Users]);

      // await sequelize
      //   .sync({ force: true })
      //   .then(() => {
      //     console.log('********** Db Connected Successfully **********');
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //     console.log('********** Error in database connection **********');
      //   });

      return sequelize;
    },
  },
];
