import expressLoader from './express';
import mysqlLoader from './mysql';   
import { Application } from 'express';
require('dotenv').config();

export default async (app: Application) => {
    await expressLoader(app);
    console.log('Express Initialized');

    await mysqlLoader();
    console.log('MySQL Initialized');

}