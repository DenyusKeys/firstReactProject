import express from "express"
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

connectDB();

//middleware
app.use(express.json());

//If route starts with this, it will hit the notesRoutes.js
app.use("/api/notes", notesRoutes);


app.listen(PORT, () => {
    console.log(`Server started on PORT:${PORT}`);
})





// mongodb+srv://keysdenyus:december0518@cluster0.5rfrfb3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

//more functionality later
// app.use("/api/posts", postsRoutes); and do the same as you did for notes