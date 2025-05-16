
import mongoose from "mongoose"
import postSchema from "../models/product_model.js"

export async function post(req,res){


    console.log("inside sell function")

   
    const {category} = req.body

    console.log(req.body)

    const files = req.files

    if(category=="cars"){

        const {brand,carName,year,fuel,transmission,noOfOwners,adTitle,description,price,kmDriven,location,email} = req.body

       let post = []

       for(let i=0;i<files.length;i++){
 
         post.push(files[i].path)
         
       }
        const data = await postSchema.create({email,category,postImage:post,brand,description,name:carName,year,fuel,transmission,owners:noOfOwners,title:adTitle,km_driven:kmDriven,price,location:{
            state:location.state,
            city:location.city,
            neighborhood:location.neighborhood
        }})

        res.status(200).json({message:"Ad Uploaded Successfully"})
        
    }

}



export async function load(req,res){

    

    const ads = await postSchema.find()


    if(ads){

        res.status(200).json({ads:ads})
    }   
}



export async function preview(req, res) {

    // console.log("Inside preview")
    const id = req.params.id
  
    try {

      const preview = await postSchema.findById(id)

      if (!preview) {
        return res.status(404).json({ message: "Post not found" })
      }
      res.status(200).json(preview)

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" })
    }
  }
  
  //like function
  export async function like(req, res) {

    // console.log("Inside like")
    
  try {
    const id = req.params.id;
    const email = req.query.email; // Change to body
    const post = await postSchema.findById(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    if (post.like.includes(email)) {
      post.like = post.like.filter(userEmail => userEmail !== email);
      await post.save();
      return res.status(200).json({ message: "User disliked the post", post });
    } else {
      post.like.push(email);
      await post.save();
      return res.status(200).json({ message: "liked the post", post });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
}