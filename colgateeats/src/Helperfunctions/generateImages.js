// Import the OpenAI library
const OpenAI = require('openai');

// Create a new instance of OpenAI
const openai = new OpenAI({
  apiKey: "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", 
  dangerouslyAllowBrowser: true
  // Use your API key from environment variable
});

async function generateRecipe(recipe_name) {
  const imagePrompt = `Generate an image of the dish named ${recipe_name}`;

  try {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: imagePrompt,
      n: 1,
      size: "1024x1024",
    });
    
    image_url = response.data[0].url;

    console.log("Generated Recipe Image URL:\n", image_url);

  } catch (error) {
    if (error.response && error.response.status === 429) {
      console.error("Rate limit exceeded. Please try again later.");
    } else {
      console.error("Error generating image:", error);
    }
  }
}

// Example usage
// generateRecipe("shrimp fried rice");
