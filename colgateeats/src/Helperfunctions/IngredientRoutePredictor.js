import { Configuration, OpenAIApi } from 'openai';
const OpenAI = require('openai');

// Initialize OpenAI API
const openai = new OpenAI({
  apiKey: "sk-aM_qlfmyZYldTTW3fFkj50_i_kwxW8bbcwLKnWFSFyT3BlbkFJbWLkNcNowjugliYvnpV9pKKtPoRmSwPr-33zUV79oA", 
  dangerouslyAllowBrowser: true
  // Use your API key from environment variable
});


// const openai = new OpenAIApi(openai);

// Function to predict route based on ingredients
export const predictRoute = async (ingredients) => {

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 1000,
    });

    
  // try {
  //   const prompt = `Based on the ingredients: ${ingredients.join(", ")}, which route is most likely to have these ingredients available? The available routes are: Bleeker Route, South Albany Webster Route, Syracuse Route.`;
    
  //   const response = await openai.createChatCompletion({
  //     model: 'gpt-3.5-turbo',
  //     messages: [{ role: 'user', content: prompt }],
  //   });
    
    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error("Error predicting route:", error);
    return "Error predicting route";
  }
};
