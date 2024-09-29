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
