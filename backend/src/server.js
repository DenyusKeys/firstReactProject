import express from "express"
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";

const app = express();

connectDB();


//If route starts with this, it will hit the notesRoutes.js
app.use("/api/notes", notesRoutes);

//more functionality later
// app.use("/api/posts", postsRoutes); and do the same as you did for notes


app.listen(2222, () => {
    console.log("Server started on PORT: 2222");
})


// mongodb+srv://keysdenyus:december0518@cluster0.5rfrfb3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0