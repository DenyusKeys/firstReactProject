import express from "express"

const app = express();

//API Route GET Request
//(localhost:2222/api/notes)
app.get("/api/notes", (req,res) => {
    res.status(200).send("You got 5 notes");
})

app.listen(2222, () => {
    console.log("Server started on PORT: 2222");
})