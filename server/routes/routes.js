import express, { request, response} from 'express';

 import {getPosts,createPost} from '../controllers/post.js'
const route = express.Router();
import postMessage from '../models/postMessage.js'
import bcrypt from 'bcrypt'
//router.get('/Signup', getPosts);
route.post("/Signup", async (request, response) => {
    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.password, saltPassword)
    const signeUpUser = new postMessage({
FirstName:request.body.FirstName,
LastName:request.body.LastName,
Email:request.body.Email,
password:securePassword
    })
    signeUpUser.save()
    .then(data =>{
        response.json(data)
    } )
    .catch(error=>{
        response.json(error)
    })
  });

export default route;
