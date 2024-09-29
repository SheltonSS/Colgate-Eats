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

    const image_url = response.data[0].url;
    console.log("Generated Recipe Image URL:\n", image_url);
    return image_url; // Return the image URL

  } catch (error) {
    if (error.response && error.response.status === 429) {
      console.error("Rate limit exceeded. Please try again later.");
    } else {
      console.error("Error generating image:", error);
    }
    return null;
  }
}

// Example usage: const imageURL = await generateRecipe("shrimp fried rice");

// Example usage
// generateRecipe("shrimp fried rice");
