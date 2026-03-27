import { Mistral } from "@mistralai/mistralai";

const apiKey = process.env.MISTRAL_API_KEY!;

export async function processAi(instructions: { system: string; user: string; }) {
    const client = new Mistral({ apiKey });
    const chatResponse = await client.chat.complete({
        messages: [
            {
                content: instructions.system,
                role: "system"
            },
            {
                content: instructions.user,
                role: "user"
            }
        ],
        model: "mistral-large-latest"
    });

    return chatResponse.choices![0].message.content as string;
}
