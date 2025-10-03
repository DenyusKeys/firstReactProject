export async function getAllNotes(req,res) {
    res.status(200).send("You used a GET to fetch the notes");
}

export async function createNote(req,res) {
     res.status(201).json({message:"Post CREATED successfully!"})
 }

 export async function updateNote(req,res) {
     res.status(200).json({message:"Post UPDATED successfully!"})
 }

 export async function deleteNote(req,res) {
     res.status(200).json({message:"Post DELETED successfully!"})
 }