import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();
const URL = 'mongodb://127.0.0.1'
 const Connection = () =>{
mongoose.connect(URL).then(()=>{
    console.log('Database connected successfully')
}).catch((error)=>{
    console.log('Error while connecting to the database',error)
})
}
export default Connection
