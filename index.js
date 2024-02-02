const openai = require('openai');

// require('dotenv').config()

// console.log(process.env)

// // Define your OpenAI API key
// const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// Text to send to ChatGPT for completion
const prompt = "Once upon a time, ";

// Function to send request to ChatGPT API
async function Chat_Completion(prompt) {
  try {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a helpful assistant." }],
        model: "gpt-3.5-turbo",
      });

      console.log(choices[0]);

  } catch (error) {
    console.error("Error generating response:", error.response ? error.response.data : error.message);
  }
}

// Call the function to generate a ChatGPT response
Chat_Completion();
