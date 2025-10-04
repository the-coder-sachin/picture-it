import express, {  urlencoded } from 'express'
import cors from 'cors'
import connectDB from './config/mongoDb.js';
import dotenv from 'dotenv'
import userRouter from './routes/userRoutes.js';
import imageRouter from './routes/imageRoutes.js';

dotenv.config()

const port = process.env.PORT || 6000;

const app = express();
app.use(cors());
app.use(express.json(urlencoded({extended:true})))
// app.use(.urlencoded({extended:true}))
await connectDB()

// api endpoints
app.use('/api/user', userRouter) 
app.use('/api/image', imageRouter) 



app.get('/', (req,res)=>{
    res.send('BACKEND PICTURE IT')
})

app.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}`)
})