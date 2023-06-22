import Note from "@models/Note";
import { connectToDB } from "@utils/database";

export const revalidate = 0;

export const POST = async (request) => {


    const { userId, note } = await request.json();
   

    const summary = note;
    try{
        await connectToDB();


        const newNote = new Note ({ creator: userId, note, summary });

        const headers = new Headers();
        headers.append("Cache-Control", "no-store");

        const responseInit = {
            status: 201,
            statusText: 'OK',
            headers: headers
          };
        
        await newNote.save();
        return new Response(JSON.stringify(newNote), responseInit);
    } catch (error) {
        return new Response("Failed to create a new note", { status: 500 });
    }
};