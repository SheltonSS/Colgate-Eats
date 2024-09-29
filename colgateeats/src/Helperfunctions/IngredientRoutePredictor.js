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
  const prompt = `Based on the ingredients:\n ${ingredients.join(", ")}, which route is most likely to have these ingredients available? The available routes are: \n${stores.join(", ")}`;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 1000,
    });

    
  // try {
    
  //   const response = await openai.createChatCompletion({
  //     model: 'gpt-3.5-turbo',
  //     messages: [{ role: 'user', content: prompt }],
  //   });
    console.log("Generated Route:\n", response.choices[0].message.content);
    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error("Error predicting route:", error);
    return "Error predicting route";
  }
};
