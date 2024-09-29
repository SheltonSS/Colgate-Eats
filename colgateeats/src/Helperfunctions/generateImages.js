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
