import express from "express"
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middelware/rateLimiter.js"
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

//middleware
app.use(express.json()); //parse JSON bodies: req.body

app.use(rateLimiter);

//Simple custom middleware
app.use((req,res,next) => {
    console.log(`Request method is ${req.method} and URL is ${req.url}`);
    next();
})

//If route starts with this, it will hit the notesRoutes.js
app.use("/api/notes", notesRoutes);


//Better for production to connect to database before launching the application
connectDB().then(() => {
    app.listen(PORT, () => {
    console.log(`Server started on PORT:${PORT}`);
    });
})






// mongodb+srv://keysdenyus:december0518@cluster0.5rfrfb3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

//more functionality later
// app.use("/api/posts", postsRoutes); and do the same as you did for notes