import express from "express"

const app = express();

//API Route GET Request
//(localhost:2222/api/notes)
app.get("/api/notes", (req,res) => {
    res.status(200).send("You got 22 notes");
})


app.post("/api/notes", (req,res) => {
    res.status(201).json({message:"Post CREATED successfully!"})
})

//Want to know which note it is: Need the id of the note (:id);
app.put("/api/notes/:id", (req,res) => {
    res.status(200).json({message:"Post UPDATED successfully!"})
})

app.delete("/api/notes/:id", (req,res) => {
    res.status(200).json({message:"Post DELETED successfully!"})
})

app.listen(2222, () => {
    console.log("Server started on PORT: 2222");
})