import express from "express"
import { post,load,preview,like,offer } from "../Controller/product_controller.js"
import upload from "../multer/multer.config.js"

const olx_routes = express.Router()


olx_routes.post("/post",upload.array("file",10),post)


olx_routes.get("/load",load)


olx_routes.get("/preview/:id",preview)

olx_routes.get("/like/:id",like)


olx_routes.get("/offer",offer)

export default olx_routes





