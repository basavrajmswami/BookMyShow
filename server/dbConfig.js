const mongoose =require('mongoose');

const connectDb= async ()=>{
    try{
         await mongoose.connect(process.env.MONGO_URL);
         console.log("DB connected .........");

    }catch(err){
        console.log("Error in DBCONNECT ..",err);
    }
}

 module.exports ={connectDb}