import express from 'express'
import env from 'dotenv/config'
import { dbConnect } from './config/dbConnect.js';
import categoryRouter from './routes/category.route.js';
import quoteRouter from './routes/quote.route.js';

// Configuration
const app = express();
dbConnect()
app.use(express.json());

// Routes
app.use('/api/category/', categoryRouter)
app.use('/api/quote/', quoteRouter)

// Server
app.listen(process.env.PORT, () => {
    console.log('Server is running!')
})