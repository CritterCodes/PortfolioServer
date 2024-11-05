import express from 'express';
import cors from 'cors';
import config from 'config';
//import { db } from './lib/database.js';
import ContactRoute from './routes/contact.route.js';
import dotenv from 'dotenv';
import BookingRoute from './routes/booking.route.js';
import { auth } from './middleware/auth.middleware.js';



const app = express();
app.use(cors(config.get('cors')));

app.use(express.json());


//db.init(config);

dotenv.config();
// Middleware here

// Routes here
app.use('/api/v1/booking', BookingRoute);
app.use('/api/v1/contact', ContactRoute);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));