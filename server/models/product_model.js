

import mongoose from "mongoose";

//create a schema for posts

const postSchema = new mongoose.Schema({

  category:{type:String,required:true},  
  postImage: [{ type: String }],
  brand: {type:String,required:true},
  description: { type: String, required: true},
  name : {type:String,default:null},
  year:{type:String,default:null},
  fuel:{type:String,default:null},
  transmission:{type:String,default:null},
  owners:{type:String,default:null},
  title:{type:String,default:null},
  description:{type:String,default:null},
  price:{type:String,required:true},
  location:{type:String,required:true},
});


export default mongoose.model.Posts || mongoose.model("Posts", postSchema);