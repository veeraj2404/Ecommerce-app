import express from "express";
import { addToCart, getUserCart, updateToCart } from "../controllers/cartController";
import authUser from "../middleware/auth";

const cartRoute = express.Router()

cartRoute.get('/get', authUser, getUserCart)
cartRoute.post('/add', authUser, addToCart)
cartRoute.post('/update', authUser, updateToCart)

export default cartRoute;