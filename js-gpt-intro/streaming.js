import { OpenAI } from "langchain/llms/openai";

// To enable streaming, we pass in `streaming: true` to the LLM constructor.
// Additionally, we pass in a handler for the `handleLLMNewToken` event.
const chat = new OpenAI({
  streaming: true,
  model: "gpt-3.5-turbo",
  callbacks: [
    {
      handleLLMNewToken(token) {
        process.stdout.write(token);
      },
    },
  ],
});

await chat.call("write some reasons why JS is awesome");

// function callChat() {
//     return chat.call("write some reasons why JS is awesome");
// }

// await callChat();

