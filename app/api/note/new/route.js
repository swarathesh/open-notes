import Note from "@models/Note";
import { connectToDB } from "@utils/database";



export const POST = async (request) => {


    const { userId, note } = await request.json();
   

    const summary = note;
    try{
        await connectToDB();


        const newNote = new Note ({ creator: userId, note, summary });

        
        await newNote.save();
        return new Response(JSON.stringify(newNote), { status: 201 });
    } catch (error) {
        return new Response("Failed to create a new note", { status: 500 });
    }
};