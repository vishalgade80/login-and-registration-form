import express from 'express';

import { register,login,getAll } from '../Controlers/Controlers.js';

const router = express.Router();

router.post("/register",register);
router.post("/login", login);
router.get("/getAll",getAll);
export default router


// {
//     "name":"vishu",
//     "email":"hi@gmail.com",
//     "dateOfBirth":"2024-2-2",
//     "password":"123"
//   }