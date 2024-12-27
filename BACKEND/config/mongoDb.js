import mongoose from "mongoose";

const connectDB = async () =>{
    mongoose.connection.on('connected', ()=>{
        console.log(`mongoose connected`)        
    })
    await mongoose.connect(
      `mongodb+srv://Picture-it:easypz@cluster0.cslgd.mongodb.net/picture-it`
    );
}

export default connectDB