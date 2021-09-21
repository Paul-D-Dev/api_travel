import mysql from 'mysql';
import { DbHandler } from '../repository/db.handler';

export default async () => {
    const pool = mysql.createPool({
        connectionLimit: 10,
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PWD,
        database: process.env.DB_NAME,
    })

    DbHandler.getInstance(pool);
    return pool;
}