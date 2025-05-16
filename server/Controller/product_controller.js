
import mongoose from "mongoose"
import postSchema from "../models/product_model.js"




import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "c02c2fd894074a",
    pass: "e21d18254c39d7",
  },
});


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



export async function offer(req,res) {


  // console.log(req.query.sellerMail)
  // console.log(req.query.buyerEmail)

  console.log(req.query)

  // const info1 = await transporter.sendMail({
  //   from: req.query.sellerMail, 
  //   to: req.query.buyerEmail, // list of receivers
  //   subject: "Product Enquiry", // Subject line
  //   text: 'Thank you for the offer', // plain text body
  //   html: `<b>Hello ${req.query.buyerEmail.split("@")[0]} ,this is a confirmation mail regarding your offer on olx  , i have accepted your offer.</b>
    
  //   <b>This is the prodcut details</b>
  //   <b>Product Name : ${req.query.name} </b>
  //   <b>Original Price is ${req.query.price} and  Offer Price is ${req.query.offerPrice}</b>
  //   <b>Location , State:${req.query.state} and City is ${req.query.city}</b>`, // html body
  // });
  
  // console.log("Message sent to buyer from seller : %s", info1.messageId);



  const buyerName = req.query.buyerEmail?.split('@')[0] || 'Customer';
  const productName = req.query.name || 'N/A';
  const originalPrice = parseFloat(req.query.price) || 'N/A';
  const offerPrice = parseFloat(req.query.offerPrice) || 'N/A';
  const city = req.query.city || 'N/A';
  const state = req.query.state || 'N/A';

  // Send email using nodemailer
  const info1 = await transporter.sendMail({
    from: req.query.sellerMail, // Sender's email
    to: req.query.buyerEmail, // Receiver's email
    subject: 'OLX Offer Acceptance Confirmation', // Subject 
    text: `Thank you for your offer on OLX. Your offer for "${productName}" has been accepted.`, // Plain text 
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <!-- Header -->
        <div style="background-color: #007bff; color: white; padding: 15px; text-align: center; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 24px;">Offer Accepted on OLX</h1>
        </div>

        <!-- Body -->
        <div style="padding: 20px;">
          <p style="font-size: 16px; color: #333;">
            Hello <strong>${buyerName}</strong>,
          </p>
          <p style="font-size: 16px; color: #333;">
            We are pleased to inform you that your offer for the product listed on OLX has been accepted by the seller.
          </p>

          <!-- Product Details -->
          <h2 style="font-size: 18px; color: #333; margin-top: 20px;">Product Details</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
            <tr>
              <td style="padding: 8px; font-size: 14px; color: #333; border-bottom: 1px solid #e0e0e0;"><strong>Product Name</strong></td>
              <td style="padding: 8px; font-size: 14px; color: #333; border-bottom: 1px solid #e0e0e0;">${productName}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-size: 14px; color: #333; border-bottom: 1px solid #e0e0e0;"><strong>Original Price</strong></td>
              <td style="padding: 8px; font-size: 14px; color: #333; border-bottom: 1px solid #e0e0e0;">₹${originalPrice.toLocaleString()}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-size: 14px; color: #333; border-bottom: 1px solid #e0e0e0;"><strong>Offer Price</strong></td>
              <td style="padding: 8px; font-size: 14px; color: #333; border-bottom: 1px solid #e0e0e0;">₹${offerPrice.toLocaleString()}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-size: 14px; color: #333; border-bottom: 1px solid #e0e0e0;"><strong>Location</strong></td>
              <td style="padding: 8px; font-size: 14px; color: #333; border-bottom: 1px solid #e0e0e0;">${city}, ${state}</td>
            </tr>
          </table>

          <p style="font-size: 16px; color: #333; margin-top: 20px;">
            Please contact the seller at <a href="mailto:${req.query.sellerMail}" style="color: #007bff; text-decoration: none;">${req.query.sellerMail}</a> to finalize the transaction details.
          </p>
        </div>

        <!-- Footer -->
        <div style="background-color: #f8f9fa; padding: 15px; text-align: center; border-radius: 0 0 8px 8px;">
          <p style="font-size: 14px; color: #666; margin: 0;">
            This is an automated message from OLX. Please do not reply directly to this email.
          </p>
          <p style="font-size: 14px; color: #666; margin: 5px 0;">
            &copy; ${new Date().getFullYear()} OLX. All rights reserved.
          </p>
        </div>
      </div>
    `, // HTML body
  });

  console.log("Message sent: %s", info1.messageId);


  const info2 = await transporter.sendMail({
    from: req.query.buyerEmail, // Sender's email (buyer's email)
    to: req.query.sellerMail, // Receiver's email (seller's email)
    subject: 'New Offer for Your Product on OLX', // Subject line
    text: `Hello, I have made an offer for your product "${productName}" on OLX. Please contact me at ${req.query.buyerEmail} to discuss further.`, // Plain text fallback
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <!-- Header -->
        <div style="background-color: #007bff; color: white; padding: 15px; text-align: center; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 24px;">New Offer on OLX</h1>
        </div>

        <!-- Body -->
        <div style="padding: 20px;">
          <p style="font-size: 16px; color: #333;">
            Hello Seller,
          </p>
          <p style="font-size: 16px; color: #333;">
            I’m interested in your product listed on OLX and have submitted an offer. I’d love to discuss further details with you.
          </p>

          <!-- Product Details -->
          <h2 style="font-size: 18px; color: #333; margin-top: 20px;">Product Details</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
            <tr>
              <td style="padding: 8px; font-size: 14px; color: #333; border-bottom: 1px solid #e0e0e0;"><strong>Product Name</strong></td>
              <td style="padding: 8px; font-size: 14px; color: #333; border-bottom: 1px solid #e0e0e0;">${productName}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-size: 14px; color: #333; border-bottom: 1px solid #e0e0e0;"><strong>Original Price</strong></td>
              <td style="padding: 8px; font-size: 14px; color: #333; border-bottom: 1px solid #e0e0e0;">₹${originalPrice.toLocaleString()}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-size: 14px; color: #333; border-bottom: 1px solid #e0e0e0;"><strong>Offer Price</strong></td>
              <td style="padding: 8px; font-size: 14px; color: #333; border-bottom: 1px solid #e0e0e0;">₹${offerPrice.toLocaleString()}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-size: 14px; color: #333; border-bottom: 1px solid #e0e0e0;"><strong>Location</strong></td>
              <td style="padding: 8px; font-size: 14px; color: #333; border-bottom: 1px solid #e0e0e0;">${city}, ${state}</td>
            </tr>
          </table>

          <!-- Contact Details -->
          <p style="font-size: 16px; color: #333; margin-top: 20px;">
            Please contact me at <a href="mailto:${req.query.buyerEmail}" style="color: #007bff; text-decoration: none;">${req.query.buyerEmail}</a> to finalize the transaction or discuss further.
          </p>
        </div>

        <!-- Footer -->
        <div style="background-color: #f8f9fa; padding: 15px; text-align: center; border-radius: 0 0 8px 8px;">
          <p style="font-size: 14px; color: #666; margin: 0;">
            This is an automated message from OLX. Please do not reply directly to this email.
          </p>
          <p style="font-size: 14px; color: #666; margin: 5px 0;">
            © ${new Date().getFullYear()} OLX. All rights reserved.
          </p>
        </div>
      </div>
    `, // HTML body
  });

  console.log("Message sent: %s", info2.messageId);
  

}