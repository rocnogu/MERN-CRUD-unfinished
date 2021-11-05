import express from 'express';
import bodyParser from "body-parser";
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';
//
const app = express();
dotenv.config();
//
app.use('/posts', postRoutes)
//
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json({ limit: "30mb", extended: true }));
//
app.use(cors());
//
const PORT = process.env.PORT || 9876
const CONNECTION_URL = process.env.CONNECTION_URL
//
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
.catch((err)=> console.log(err.message));
