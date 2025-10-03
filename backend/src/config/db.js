import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        mongoose.connect("mongodb+srv://keysdenyus:december0518@cluster0.5rfrfb3.mongodb.net/notes_db?retryWrites=true&w=majority&appName=Cluster0")
        
        console.log("MongoDB CONNECTED SUCCESSFULLY")
    } catch (error) {
        console.error("Error connecting to MONGODB", error);
        process.exit(1); //exit with failure
    }
}


//LEFT OFF HERE FOR VIDEO 54:22 going over hiding connection string