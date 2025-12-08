
const MONGO_URI="mongodb+srv://sagarjavir8:vA5GK8GMtpfKzCmE@nextjscrud.ecslqga.mongodb.net/?retryWrites=true&w=majority&appName=nextjscrud"
import mongoose from "mongoose";

// Connect to MongoDB
const connectMongo = async () => {
    try {
        const {connection} = await mongoose.connect(MONGO_URI); //all data will asynchronously returned in connection object
        if(connection.readyState == 1){
            console.log("Database Connected to MongoDB");
        }
    } catch (error) {
        return Promise.reject(error);
    }
}

export default connectMongo;