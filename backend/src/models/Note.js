import mongoose from "mongoose";

//1. Create a schema
//2. Create a model based on schema
//3. Export the model to be used elsewhere

const noteSchema = new mongoose.Schema(
    {
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    },
    {timestamps: true} //Mongoose will create "createdAt" and "updatedAt" when this field is used.
);

//Create a note model based off this schema
const Note = mongoose.model("Note", noteSchema);

export default Note;