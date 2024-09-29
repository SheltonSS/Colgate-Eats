// Import the OpenAI library
const OpenAI = require('openai');

// Create a new instance of OpenAI
const openai = new OpenAI({
  apiKey: "sk-aM_qlfmyZYldTTW3fFkj50_i_kwxW8bbcwLKnWFSFyT3BlbkFJbWLkNcNowjugliYvnpV9pKKtPoRmSwPr-33zUV79oA",
  dangerouslyAllowBrowser: true
});

async function generateRecipe(sweet_rank, spice_rank, veggie_rank, meal_time, time_range, cuisine, skill_level) {
  const prompt = `Generate three unique recipes based on the following user preferences. Each recipe should include a name, ingredients, cooking instructions, cuisine type, and estimated cook time. The user has ranked their preferences on a scale of 1 to 10 as follows:

  Sweet: ${sweet_rank}
  Mild: ${spice_rank}
  Veggie: ${veggie_rank}
  Meal time from breakfast, lunch, dinner: ${meal_time}
  Time (array of minutes): ${time_range}
  Cuisine from asian, african, european, latin: ${cuisine}
  Skill Level from beginner, intermediate, or pro: ${skill_level}
  Make sure to consider the rankings to balance the recipe flavors and complexity accordingly. Ensure that the recipes are suitable for the user's skill level and include a variety of ingredients that match their preferences.
  Give a response in JSON with recipe_title(STRING), cook_time(INT), ingredients(ARRAY of STRINGS), cuisine(STRING), allergens(ARARY of STRING), dietary_restrictions for example vegan or halal(ARARY of STRING), instructions(STRING)
  `;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 1000,
    });

    console.log("Generated Recipe:\n", response.choices[0].message.content);
  } catch (error) {
    if (error.response && error.response.status === 429) {
      console.error("Rate limit exceeded. Please try again later.");
    } else {
      console.error("Error generating recipe:", error);
    }
  }
}

// Example usage
// generateRecipe(1, 8, 8, [30, 60], 'asian', 'beginner');
