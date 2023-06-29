import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanChatMessage } from "langchain/schema";
import { OpenAI } from "langchain/llms/openai";

// this will get your api key from the environment variable. or you can define it explicitly here :

OpenAI.apiKey = process.env.OPENAI_API_KEY;
// OpenAI.apiKey = "your api key";

export const run = async () => {
    const chat = new ChatOpenAI({model: "gpt-3.5-turbo", temperature: 0.7});
    // Pass in a list of messages to `call` to start a conversation. In this simple example, we only pass in one message.
    const response = await chat.call([
        new HumanChatMessage(
            "What is a good name for a company that codes AI apps?"
        ),
    ]);
    console.log(response.text);
    // AIChatMessage { text: '\n\nRainbow Sox Co.' }
};

// Call the run function to execute the code
// run();
