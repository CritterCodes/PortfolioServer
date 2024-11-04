import express from 'express';
import cors from 'cors';
//import { db } from './lib/database.js';
import ContactRoute from './routes/contact.route.js';
import dotenv from 'dotenv';
import BookingRoute from './routes/booking.route.js';


const app = express();
app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend URL in production
    methods: 'POST'
}));

app.use(express.json());


const config = {
  url: process.env.MONGO_URL,
  database: process.env.DB,
  minPoolSize: 3,
  maxPoolSize: 10,
};

//db.init(config);

dotenv.config();
// Middleware here

// Routes here
app.use('/api/v1/booking', BookingRoute);
app.use('/api/v1/contact', ContactRoute);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));