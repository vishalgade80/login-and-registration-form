import express from 'express'
import bodyParser from 'body-parser'
import  Connection from './Database/Connection.js';
import router from './Router/Router.js';
import cors from 'cors';


Connection();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(router)
const Port = 4999
app.listen(Port,()=>{console.log(`Server is running on ${Port}`)})
