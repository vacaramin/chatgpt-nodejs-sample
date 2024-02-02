const axios = require('axios');
require('dotenv').config()

// Define your API endpoint
const CHATGPT_API_ENDPOINT = 'https://api.openai.com/v1/engines/davinci/completions';

// Define your OpenAI API key
const OPENAI_API_KEY = process.;

// Text to send to ChatGPT for completion
const prompt = "Once upon a time, ";

// Function to send request to ChatGPT API
async function generateChatResponse() {
  try {
    const response = await axios.post(
      CHATGPT_API_ENDPOINT,
      {
        "prompt": prompt,
        "max_tokens": 150
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`
        }
      }
    );

    console.log("Generated response:", response.data.choices[0].text.trim());
  } catch (error) {
    console.error("Error generating response:", error.response ? error.response.data : error.message);
  }
}

// Call the function to generate a ChatGPT response
generateChatResponse();
