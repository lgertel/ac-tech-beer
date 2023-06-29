import { Calculator } from "langchain/tools/calculator";
import { SerpAPI } from "langchain/tools";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { PlanAndExecuteAgentExecutor } from "langchain/experimental/plan_and_execute";
import { OpenAI } from "langchain/llms/openai";

// define the API key. from environment variable. or you cna define it explicitly here like this:
// OpenAI.apikey = "your api key"
OpenAI.apiKey =  process.env.OPENAI_API_KEY; // or
// OpenAI.apiKey =  "your api key";
SerpAPI.apiKey = process.env.SERPAPI_API_KEY; // or
// SerpAPI.apiKey = "your api key"

const tools = [new Calculator(), new SerpAPI()];
const model = new ChatOpenAI({
  temperature: 0,
  modelName: "gpt-3.5-turbo",
  verbose: false,
});
const executor = PlanAndExecuteAgentExecutor.fromLLMAndTools({
  llm: model,
  tools,
});

const result = await executor.call({
  input: `Who is the current president of the United States? What is their current age raised to the second power?`,
});

console.log({ result });