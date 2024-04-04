import mongoose from 'mongoose'
const URL = 'mongodb://127.0.0.1/'
 const Connection = () =>{
mongoose.connect(URL).then(()=>{
    console.log('Database connected successfully')
}).catch((error)=>{
    console.log('Error while connecting to the database',error)
})
}
export default Connection
