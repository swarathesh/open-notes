import Note from "@models/Note";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { userId, prompt, tag } = await request.json();

    try {
        await connectToDB();
        const newPrompt = new Note({ creator: userId, prompt, tag });

        
        await newPrompt.save();

        const headers = new Headers();
        headers.set("Cache-Control", "no-store");

        const responseInit = {
            status: 201,
            statusText: 'OK',
            headers: headers
          };
       
        return new Response(JSON.stringify(newPrompt), responseInit)
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}
