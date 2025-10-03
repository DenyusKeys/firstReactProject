import express from "express"
import notesRoutes from "./routes/notesRoutes.js";
const app = express();

//If route starts with this, it will hit the notesRoutes.js
app.use("/api/notes", notesRoutes);

//more functionality later
// app.use("/api/posts", postsRoutes); and do the same as you did for notes


app.listen(2222, () => {
    console.log("Server started on PORT: 2222");
})