import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanChatMessage } from "langchain/schema";

const chat = new ChatOpenAI({
  maxTokens: 50,
  streaming: true,
});

chat.call(
  [new HumanChatMessage("Tell me a story about programing.")],
  undefined,
  [
    {
      handleLLMNewToken(token) {
        process.stdout.write(token);
      },
    },
  ]
).then((response) => {
  console.log(response);
});