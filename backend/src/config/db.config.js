const {default:mongoose}=require("mongoose");

exports.connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`the db is connect with ${mongoose.connection.host} host `.bgRed.white);
    } catch (error) {
        mongoose.disconnect();
        process.exit(1);
    }
}
