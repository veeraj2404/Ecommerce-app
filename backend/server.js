import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js'; // Use import and add .js extension
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRoute from './routes/cartRoute.js';

// App Config
const app = express();
const port = process.env.PORT || 4000;

// Connect to the database
connectDB();
connectCloudinary();

// Middlewares
app.use(express.json());
app.use(cors());

// API Endpoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRoute)

app.get('/', (req, res) => {
  res.send("API WORKING");
});

// Start the server
app.listen(port, () => console.log(`Server started on PORT: ${port}`));
