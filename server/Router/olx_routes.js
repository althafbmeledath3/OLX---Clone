import express from "express"
import { post,load,preview } from "../Controller/product_controller.js"
import upload from "../multer/multer.config.js"

const olx_routes = express.Router()


olx_routes.post("/post",upload.array("file",10),post)


olx_routes.get("/load",load)


olx_routes.get("/preview/:id",preview)


export default olx_routes





