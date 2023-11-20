const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const commentRoute = require('./routes/comment');

//database
const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Database is connected successfully!")
    
    } 
    catch (err) {
        console.log(err);
    }
}

//middlewares
dotenv.config();
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/posts", postRoute)
app.use("/api/comments", commentRoute)

app.listen(process.env.PORT, ()=>{
    connectDB()
    console.log(`Port is running on Port ${process.env.PORT}`);
})