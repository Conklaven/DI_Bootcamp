import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from './Routes/index.js';
import db from './config/Database.js';
dotenv.config();

const app= express();

try {
    await db.authenticate();
    console.log('Database Connected')
} catch (error) {
    console.log(error);
}
app.use(cors({credentials: true, origin:'http://localhost:3000'}));
app.use(cookieParser());
app.use(express.json());
app.use(router)
app.listen(process.env.PORT, ()=> console.log(`listening on port ${process.env.PORT}`));