import express from 'express'
import dotenv from 'dotenv';
import bodyParser from 'body-parser'
import  Connection from './Database/Connection.js';
import router from './Router/Router.js';
import cors from 'cors';


Connection();
const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use(router)
const Port = process.env.PORT
app.listen(Port,()=>{console.log(`Server is running on ${Port}`)})