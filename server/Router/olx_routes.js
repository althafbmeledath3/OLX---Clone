import express from "express"
import { post,load } from "../Controller/product_controller.js"
import upload from "../multer/multer.config.js"

const olx_routes = express.Router()


olx_routes.post("/post",upload.array("file",10),post)


olx_routes.get("/load",load)


export default olx_routes
