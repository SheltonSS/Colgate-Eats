import React, { useState } from 'react';
import { Slider, Button, Typography, Box } from '@mui/material';
import axios from 'axios';
import { generateRecipe } from '../Helperfunctions/generateRecipe';

const TestingPage = () => {
  // // State for each slider value
  const [light, setLight] = useState(3);
  const [sweet, setSweet] = useState(3);
  const [mild, setMild] = useState(3);
  const [west, setWest] = useState(3);
  const [veggie, setVeggie] = useState(3);
  const [time, setTime] = useState(3);
  const [foodSuggestions, setFoodSuggestions] = useState([]);


  return (
    <Box sx={{ width: 300, margin: 'auto', textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom>
        Food Preference Sliders
      </Typography>
      <Slider value={light} onChange={(e, val) => setLight(val)} min={1} max={10} step={1} />
      <Typography>Lightness: {light}</Typography>
      <Slider value={sweet} onChange={(e, val) => setSweet(val)} min={1} max={10} step={1} />
      <Typography>Sweetness: {sweet}</Typography>
      <Slider value={mild} onChange={(e, val) => setMild(val)} min={1} max={10} step={1} />
      <Typography>Mildness: {mild}</Typography>
      <Slider value={west} onChange={(e, val) => setWest(val)} min={1} max={10} step={1} />
      <Typography>Western Cuisine Preference: {west}</Typography>
      <Slider value={veggie} onChange={(e, val) => setVeggie(val)} min={1} max={10} step={1} />
      <Typography>Vegetarian Preference: {veggie}</Typography>
      <Slider value={time} onChange={(e, val) => setTime(val)} min={1} max={10} step={1} />
      <Typography>Time of Day: {time}</Typography>

      {/* <Button variant="contained" color="primary" onClick={generateRecipe} sx={{ marginTop: 2 }}>
        Generate Food Suggestions
      </Button> */}

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
