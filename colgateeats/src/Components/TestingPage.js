import React, { useState } from 'react';
import { Slider, Button, Typography, Box } from '@mui/material';
import { predictRoute } from '../Helperfunctions/IngredientRoutePredictor';

const TestingPage = () => {
  const [light, setLight] = useState(3);
  const [sweet, setSweet] = useState(3);
  const [mild, setMild] = useState(3);
  const [west, setWest] = useState(3);
  const [veggie, setVeggie] = useState(3);
  const [time, setTime] = useState(3);
  const [predictedRoute, setPredictedRoute] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handlePredictRoute = async () => {
    const ingredients = []; // Construct your ingredients based on the slider values
    if (light > 5) ingredients.push('light'); // Example of how to gather ingredients
    if (sweet > 5) ingredients.push('sweet');
    if (mild > 5) ingredients.push('mild');
    if (west > 5) ingredients.push('western');
    if (veggie > 5) ingredients.push('vegetarian');

    setLoading(true);
    const route = await predictRoute(ingredients); // Call the prediction function
    setPredictedRoute(route);
    setLoading(false);
  };

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

      <Button variant="contained" color="primary" onClick={handlePredictRoute} sx={{ marginTop: 2 }} disabled={loading}>
        {loading ? "Loading..." : "Generate Food Suggestions"}
      </Button>

      {predictedRoute && (
        <Box sx={{ marginTop: 4 }}>
          <Typography variant="h6">Predicted Route: {predictedRoute}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default TestingPage;
