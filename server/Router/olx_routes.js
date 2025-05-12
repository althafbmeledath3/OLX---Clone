import express from "express"
import { sell } from "../Controller/product_controller.js"


const olx_routes = express.Router()


olx_routes.post("/sell",sell)


export default olx_routes
