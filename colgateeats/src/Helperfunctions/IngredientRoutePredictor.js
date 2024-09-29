import { Configuration, OpenAIApi } from 'openai';
const OpenAI = require('openai');

// Initialize OpenAI API
const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true
});


const stores = [
  { name: 'Aye Tue Asian Grocery Store', address: '335 South St, Utica', type: 'Asian', route: 'Bleeker Route' },
  { name: 'Sweet Asian Food Market', address: '645 South St, Utica', type: 'Asian', route: 'Bleeker Route' },
  { name: 'Royal Imports', address: '1201 Albany St, Utica', type: 'Asian', route: 'South,Albany,Webster Route' },
  { name: 'Ruznic Market & Restaurant', address: '801 Albany St, Utica', type: 'Europe', route: 'South,Albany,Webster Route' },
  { name: 'International Grocery', address: '1024 Webster Ave, Utica', type: 'Europe', route: 'South,Albany,Webster Route' },
  { name: 'Kendic Bakery & Grocery', address: '1305 Bleecker St, Utica', type: 'Europe', route: 'Bleeker Route' },
  { name: 'Ecuamex Deli Store Corp.', address: '1207 Bleecker St, Utica', type: 'Latin', route: 'Bleeker Route' },
  { name: 'Romas Sausage & Deli', address: '2029 Bleecker St, Utica', type: 'Europe', route: 'Bleeker Route' },
  { name: 'Sammy & Annie Foods The Store and Cafe', address: '717 Bleecker St, Utica', type: 'Europe', route: 'Bleeker Route' },
  { name: 'Moon Light Burmese Food Store', address: '1205 Bleecker St', type: 'Asian', route: 'Bleeker Route' },
  { name: 'Uncle Bakarr African Grocery', address: '677 Bleecker St, Utica', type: 'African', route: 'Bleeker Route' },
  { name: 'Nguyen Phat Oriental Store', address: '643 Bleecker St, Utica', type: 'Asian', route: 'Bleeker Route' },
  { name: 'Muju International Grocery', address: '1026 Champlin Ave, Utica', type: 'Asian', route: 'South,Albany,Webster Route' },
  { name: 'Asia Food Market', address: '1449 Erie Blvd E, Syracuse', type: 'Asian', route: 'Syracuse Route' },
  { name: 'Hans Oriental Supermarket', address: '2731 Erie Blvd E, Syracuse', type: 'Asian', route: 'Syracuse Route' },
];
// const openai = new OpenAIApi(openai);

// Function to predict route based on ingredients
export const predictRoute = async (ingredients) => {
  // Format the store information for the prompt
  const formattedStores = stores.map(store => {
    return `Store Name: ${store.name}, Address: ${store.address}, Type: ${store.type}, Route: ${store.route}`;
  }).join("\n");

  // Create the prompt with ingredients and the formatted store info
  const prompt = `
    Based on the following ingredients: ${ingredients.join(", ")},
    which grocery store route is most likely to have these ingredients available?
    The available routes and stores are:
    
    ${formattedStores}
    
    Please select the most likely route based on the ingredient types and stores. The response should just be the name of the route.
  `;

  console.log("Generated Prompt:", prompt);

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 1000,
    });

    console.log("Generated Route:\n", response.choices[0].message.content);
    return response.choices[0].message.content.trim();
  } catch (error) {
    console.error("Error predicting route:", error);
    return "Error predicting route";
  }
};
