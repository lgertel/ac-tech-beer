// const { OpenAI } = require("langchain/llms/openai");
// const { PromptTemplate } = require("langchain/prompts");
// const { LLMChain } = require("langchain/chains");

import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";


// define the API key. from environment variable. or you cna define it explicitly here like this:
// OpenAI.apikey = "your api key"
OpenAI.apiKey =  process.env.OPENAI_API_KEY;

// define the model. you can use GPT-4. here we use the gpt-3.5-turbo model
const model = new OpenAI({model: "gpt-3.5-turbo", temperature: 0.9 });


// Define a prompt template
const template = "what is a title for a video that talks about {language}?";
const prompt = new PromptTemplate({
  template: template,
  inputVariables: ["language"],
});

const chain = new LLMChain({ llm: model, prompt: prompt });

async function gptCall() {

    const res = await chain.call({ language: "JavaScript" });
    console.log(res.text);
}

gptCall().catch((error) => {
    console.error(error);
});