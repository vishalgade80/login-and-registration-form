
import User from "../Model/model.js";
import  Jwt  from "jsonwebtoken";


export const register =async (req, res) => {
    try {
      const { name, email, dateOfBirth, password } = req.body;
  
      
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      
      user = new User({
        name,
        email,
        dateOfBirth,
        password
      });
  
      await user.save();
  
      res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
    
  
    
    export const login =  async (req, res) => {
         try {
           const { email, password } = req.body;
      

           const user = await User.findOne({ email });
           if (!user) {
             return res.status(400).json({ message: 'Invalid credentials' });
           }
      
          
           if (user.password !== password) {
             return res.status(400).json({ message: 'Invalid credentials' });
           }

           //res.status(200).json({ message: 'Login successful' });
    const token = Jwt.sign({ userId: user._id,  }, 'key');

    
    res.status(200).json({ token, message: 'Login successful' });
           console.log("success")
         } catch (err) {
           console.error(err.message);
           res.status(500).send('Server Error');
         }
       }
    

        
       
    export const getAll = async(request,response) =>{
        try{
            const Getdata = await User.find()
    
            if(!Getdata){
                response.status(404).json({msg:"data not found"})
            }
            response.status(200).json(Getdata)
        }
        catch(error){
            console.log(error)
        }
    }
