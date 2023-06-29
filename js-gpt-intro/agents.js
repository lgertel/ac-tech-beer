import { OpenAI } from "langchain/llms/openai";
import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { SerpAPI } from "langchain/tools";
import { Calculator } from "langchain/tools/calculator";

// define the API key. from environment variable. or you cna define it explicitly here like this:
// OpenAI.apikey = "your api key"
OpenAI.apiKey =  process.env.OPENAI_API_KEY;
SerpAPI.apiKey = process.env.SERPAPI_API_KEY;

// define the model. you can use GPT-4. here we use the gpt-3.5-turbo model
const model = new OpenAI({model: "gpt-3.5-turbo", temperature: 0 });

const tools = [
  new SerpAPI(),
  new Calculator(),
];

async function gptCall() {
    const executor = await initializeAgentExecutorWithOptions(tools, model, {
    agentType: "zero-shot-react-description",
    });
    console.log("Loaded agent.");

    
const input =
  "What is the population of France?" +
  " What is it times 1000?";

console.log(`Executing with input "${input}"...`);

const result = await executor.call({ input });

console.log(`Got output ${result.output}`);
}

gptCall().catch((error) => {
    console.error(error);
});