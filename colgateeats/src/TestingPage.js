// import React from 'react';

// const TestingPage = () => {
//   return (
//     <div>
//       <h1>Testing Page</h1>
//       <p>This is a page for testing purposes.</p>
//     </div>
//   );
// };

// src/App.js
import React, { useState } from 'react';
import { Slider, Button, Typography, Box } from '@mui/material';
import axios from 'axios';

const TestingPage = () => {
  // State for each slider value
  const [light, setLight] = useState(3);
  const [sweet, setSweet] = useState(3);
  const [mild, setMild] = useState(3);
  const [west, setWest] = useState(3);
  const [veggie, setVeggie] = useState(3);
  const [time, setTime] = useState(3);
  const [foodSuggestions, setFoodSuggestions] = useState([]);

  const handleGenerate = async () => {
    const lightValue = getDescription('light', light);
    const sweetValue = getDescription('sweet', sweet);
    const mildValue = getDescription('mild', mild);
    const westValue = getDescription('west', west);
    const veggieValue = getDescription('veggie', veggie);
    const timeValue = getDescription('time', time);

    const foodDescription = `Generate me a name of 5 dishes separated by commas that have the following description: ${lightValue}, ${sweetValue}, ${mildValue}, ${westValue}, ${veggieValue}, ${timeValue}`;

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4',
          messages: [{ role: 'user', content: foodDescription }]
        },
        {
          headers: {
            Authorization: `Bearer sk-et_w9ckfiAXCuM9Yuog1-Nr_mN-q6JZSg053uT6juoT3BlbkFJ6fha9d6C5sCbVseCG_u-Or7FWg5SFElD6Oixw2NbAA`,
            'Content-Type': 'application/json'
          }
        }
      );
      const foodResponse = response.data.choices[0].message.content;
      const foodArray = foodResponse.split(', ');
      setFoodSuggestions(foodArray);
    } catch (error) {
      console.error('Error generating food suggestions:', error);
    }
  };

  const getDescription = (type, value) => {
    switch (type) {
      case 'light':
        if (value < 1) return 'Very Light to Eat';
        if (value < 2) return 'Relatively Light to Eat';
        if (value < 3) return 'Not too heavy, not too light to eat. But slightly on the light side';
        if (value < 4) return 'Not too heavy, not too light to eat. But slightly on the heavy side';
        return 'Very heavy to Eat';
      case 'sweet':
        if (value < 1) return 'Very sweet';
        if (value < 2) return 'Relatively sweet';
        if (value < 3) return 'Not too sweet, not too savory. But slightly on the sweet side';
        if (value < 4) return 'Not too sweet, not too savory. But slightly on the savory side';
        return 'Very savory';
      case 'mild':
        if (value < 1) return 'Very mild';
        if (value < 2) return 'Relatively mild, slight amount of spice';
        if (value < 3) return 'Slightly below average spice level';
        if (value < 4) return 'Slightly above average spice level';
        return 'Very spicy';
      case 'west':
        if (value < 1) return 'Comes from Western cuisines: Mexican, Brazilian, etc.';
        if (value < 2) return 'Comes from European cuisines: French, Italian, etc.';
        if (value < 3) return 'Comes from African cuisines: Moroccan, etc.';
        if (value < 4) return 'Comes from Middle Eastern cuisines: Turkish, etc.';
        return 'Comes from Asian cuisines: Indian, Chinese, etc.';
      case 'veggie':
        if (value < 1) return 'Fully Vegetarian';
        if (value < 2) return 'Mostly Vegetarian, may contain some meat';
        if (value < 3) return 'Balanced meat and veggies';
        if (value < 4) return 'Mostly meat, some veggies';
        return 'Only meat';
      case 'time':
        if (value < 1) return 'Served as breakfast';
        if (value < 2) return 'Served as brunch';
        if (value < 3) return 'Served as lunch';
        if (value < 4) return 'Served as afternoon snack';
        return 'Served as dinner';
      default:
        return '';
    }
  };

  return (
    <Box sx={{ width: 300, margin: 'auto', textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom>
        Food Preference Sliders
      </Typography>
      <Slider value={light} onChange={(e, val) => setLight(val)} min={1} max={5} step={1} />
      <Typography>Lightness: {light}</Typography>
      <Slider value={sweet} onChange={(e, val) => setSweet(val)} min={1} max={5} step={1} />
      <Typography>Sweetness: {sweet}</Typography>
      <Slider value={mild} onChange={(e, val) => setMild(val)} min={1} max={5} step={1} />
      <Typography>Mildness: {mild}</Typography>
      <Slider value={west} onChange={(e, val) => setWest(val)} min={1} max={5} step={1} />
      <Typography>Western Cuisine Preference: {west}</Typography>
      <Slider value={veggie} onChange={(e, val) => setVeggie(val)} min={1} max={5} step={1} />
      <Typography>Vegetarian Preference: {veggie}</Typography>
      <Slider value={time} onChange={(e, val) => setTime(val)} min={1} max={5} step={1} />
      <Typography>Time of Day: {time}</Typography>

      <Button variant="contained" color="primary" onClick={handleGenerate} sx={{ marginTop: 2 }}>
        Generate Food Suggestions
      </Button>

      {foodSuggestions.length > 0 && (
        <Box sx={{ marginTop: 4 }}>
          <Typography variant="h6">Food Suggestions:</Typography>
          <ul>
            {foodSuggestions.map((food, index) => (
              <li key={index}>{food}</li>
            ))}
          </ul>
        </Box>
      )}
    </Box>
  );
};

// export default App;


export default TestingPage;
