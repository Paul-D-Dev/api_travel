import express, { Application } from 'express';
import cors from 'cors';

export default async (app: Application) => {
    app.use(cors());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    return app;
}