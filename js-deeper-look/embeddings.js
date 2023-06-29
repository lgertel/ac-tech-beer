import { OpenAIEmbeddings } from "langchain/embeddings/openai";

/* Create instance */
const embeddings = new OpenAIEmbeddings();

/* Embed queries */
const res = await embeddings.embedQuery("Hello world");

console.log(res);

/* Embed documents */
const documentRes = await embeddings.embedDocuments(["Hello world", "Bye bye"]);

console.log(documentRes);
