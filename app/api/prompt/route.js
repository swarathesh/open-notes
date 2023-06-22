import Note from "@models/Note";
import { connectToDB } from "@utils/database";

export const revalidate = 0;

export const GET = async (request) => {
    try {
        await connectToDB()

        const prompts = await Note.find({}).populate('creator')

        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
} 