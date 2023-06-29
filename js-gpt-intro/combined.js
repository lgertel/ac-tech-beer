import { OpenAI } from "langchain/llms/openai";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";


// define the API key. from environment variable. or you cna define it explicitly here like this:
// OpenAI.apikey = "your api key"
OpenAI.apiKey =  process.env.OPENAI_API_KEY;

// define the model. you can use GPT-4. here we use the gpt-3.5-turbo model
const model = new OpenAI({model: "gpt-3.5-turbo", temperature: 0.5,
                        streaming: true,
                        callbacks: [
                            {
                            handleLLMNewToken(token) {
                                process.stdout.write(token);
                            },
                            },
                        ],
                        });

const memory = new BufferMemory();
// const chain = new ConversationChain({ llm: model, memory: memory });

// async function gptCall(input = "") {
//     const res = await chain.call({ input: input });
//     console.log(res.response);
// };


// // we are using await here because we want to wait for the response before we ask the next question
// await gptCall("hi, I am Memo");
// await gptCall("what is my name?")

import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { SerpAPI } from "langchain/tools";
import { Calculator } from "langchain/tools/calculator";


const tools = [
  new SerpAPI(),
  new Calculator(),
];


const executor = await initializeAgentExecutorWithOptions(tools, model, {
agentType: "zero-shot-react-description", memory: memory,
});
console.log("Loaded agent.");

    
const input =
  "What is the latest version of Langchain?" +
  " What is it times 1000?";

console.log(`Executing with input "${input}"...`);

const result = await executor.call({ input });

console.log(`Got output ${result.output}`);
