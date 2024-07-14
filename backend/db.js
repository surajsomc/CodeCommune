import {connect,disconnect} from "mongoose";

export const connectToDb=async()=>{
    try {
        await connect(process.env.MONGODB_URI);
        console.log("Connected to databse");
    } catch (error) {
        console.log("Some error occured",error.message);
    }
}

export const disConnectToDb=async()=>{
    try {
        await disconnect(process.env.MONGODB_URI);
        console.log("Disconnect to databse");
    } catch (error) {
        console.log("Some error occured",error.message);
    }
}