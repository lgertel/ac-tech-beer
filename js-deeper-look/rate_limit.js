// BEGIN: ed8c6549bwf9
import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanChatMessage } from "langchain/schema";
import { OpenAI } from "langchain/llms/openai";

// this will get your api key from the environment variable. or you can define it explicitly here :

OpenAI.apiKey = process.env.OPENAI_API_KEY;
// OpenAI.apiKey = "your api key";

export const run = async () => {
  console.time("chatbot-response-time"); // start the timer
  const chat = new ChatOpenAI({
    model: "gpt-3.5-turbo",
    temperature: 0.7,
    streaming: true,
    maxConcurrency: 2,
  });
  // Pass in a list of messages to `call` to start a conversation. In this simple example, we only pass in one message.
  const response = await chat.generate([
    [
    new HumanChatMessage(
      "Tell me a very short story of a coder who went to the moon?"
    ),
  ],
  
  [
    new HumanChatMessage(
      "Tell me a very short story of a coder who went to the moon?"
    ),
  ]
]);
  console.log(response.generations);
  console.timeEnd("chatbot-response-time"); // end the timer and log the time
};

run();

// END: ed8c6549bwf9