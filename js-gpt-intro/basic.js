// const { OpenAI } = require("langchain/llms/openai");
import { OpenAI } from "langchain/llms/openai";

// npm install -S langchain ... -S means save to package.json as a dependency

// define the API key. from environment variable. or you cna define it explicitly here like this:
// OpenAI.apikey = "your api key"
OpenAI.apiKey =  process.env.OPENAI_API_KEY;

// define the model. you can use GPT-4. here we use the gpt-3.5-turbo model
const model = new OpenAI({model: "gpt-3.5-turbo", temperature: 0.9 });

// const res = await model.call("what is a title for a video that talks about javascript?");

// console.log(res);

// Define an async function to call the model
async function gptCall() {

    const res = await model.call(
        "what is a title for a video that talks about javascript?"
    );
    console.log(res);
}

gptCall().catch((error) => {
    console.error(error);
});