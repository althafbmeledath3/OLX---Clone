
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
