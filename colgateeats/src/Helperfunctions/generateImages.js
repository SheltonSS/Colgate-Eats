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
