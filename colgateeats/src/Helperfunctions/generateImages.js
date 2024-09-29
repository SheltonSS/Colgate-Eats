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
