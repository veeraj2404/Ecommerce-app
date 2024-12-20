import express from "express";
import { addToCart, getUserCart, updateToCart } from "../controllers/cartController.js";
import authUser from "../middleware/auth.js";

const cartRoute = express.Router()

cartRoute.post('/get', authUser, getUserCart)
cartRoute.post('/add', authUser, addToCart)
cartRoute.post('/update', authUser, updateToCart)

export default cartRoute;