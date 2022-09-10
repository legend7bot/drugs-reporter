import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import connectDB from './db.js';
import userRoutes from './routes/users.js';
import authRoutes from './routes/auth.js';

const app = express();

connectDB();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

const port = process.env.PORT || 8080;

app.listen(port, console.log(`Listening on port ${port}...`));
