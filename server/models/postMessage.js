import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({

FirstName:{
    type:String,
    required:true
},
LastName:{
    type:String,
    required:true
},
Email:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
},
date:{
    type:Date,
    default:new Date()
}

})

const PostMessage =mongoose.model('mytable',postSchema);
export default PostMessage;
