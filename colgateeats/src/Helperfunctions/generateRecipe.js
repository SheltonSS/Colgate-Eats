import recipes from '../Components/recipes';

// Import the OpenAI library
const OpenAI = require('openai');

// Create a new instance of OpenAI
const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true
});

async function generateRecipe(sweet_rank, spice_rank, veggie_rank, meal_time, time_range, cuisine, skill_level) {
  const prompt =
    `
    Generate 1 unique recipe based on the following user preferences. Each recipe should include a name, ingredients, cooking instructions, cuisine type, and estimated cook time. The user has ranked their preferences on a scale of 1 to 10 as follows:

    Sweet: ${sweet_rank}
    Mild: ${spice_rank}
    Veggie: ${veggie_rank}
    Meal time: ${meal_time}
    Time (array of minutes): ${time_range}
    Cuisine: ${cuisine}
    Skill Level: ${skill_level}

    Give a response in JSON with recipe_title (STRING), cook_time (INT), ingredients (ARRAY of STRINGS), cuisine (STRING), allergens (ARRAY of STRING), dietary_restrictions (ARRAY of STRING), instructions (STRING).
  `;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 1000,
    });

    // console.log(response.choices[0].message.content)
    // return (response.choices[0].message.content)
    // recipes = response.choices[0].message.content
    // const recipes = JSON.parse(response.choices[0].message.content); // Parse JSON response
    // return recipes; // Return parsed recipes

    // Clean the response
    console.log(response.choices[0].message.content)
    const cleanedContent = response.choices[0].message.content
      .replace(/```json/g, '') // Remove the opening code block
      .replace(/```/g, '') // Remove the closing code block
      .trim(); // Remove any leading/trailing whitespace

    const recipes = JSON.parse(cleanedContent);
    return recipes; // Return parsed recipes

  } catch (error) {
    console.error("Error generating recipe:", error);
    throw error; // Rethrow error for handling in the calling function
  }
}

export default generateRecipe