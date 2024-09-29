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
