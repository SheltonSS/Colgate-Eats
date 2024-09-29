import React, { useState } from "react";
import { Slider, Button, Typography, Box } from "@mui/material";
import generateRecipe from "../Helperfunctions/generateRecipe"; // Adjust the path as necessary
import { predictRoute } from "../Helperfunctions/IngredientRoutePredictor";

const TestingPage = ({ navigateToFoodSuggestions }) => { // Accept function as a prop
  const [light, setLight] = useState(3);
  const [sweet, setSweet] = useState(3);
  const [mild, setMild] = useState(3);
  const [veggie, setVeggie] = useState(3);
  const [time, setTime] = useState(3);
  const [predictedRoute, setPredictedRoute] = useState('');
  const [mealTime, setMealTime] = useState('breakfast'); // Default meal time
  const [cuisine, setCuisine] = useState('asian'); // Default cuisine
  const [skillLevel, setSkillLevel] = useState('beginner'); // Default skill level
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  // Handle generating recipes
  const handleGenerateRecipes = async () => {
    setLoading(true);
    const timeRange = [30, 60]; // Set your desired time range
    try {
      const generatedRecipes = await generateRecipe(sweet, mild, veggie, mealTime, timeRange, cuisine, skillLevel);

      // Predict route based on the first recipe's ingredients
      const route = await predictRoute(generatedRecipes.ingredients);

      // Navigate to FoodSuggestions with the predicted route and recipes
      console.log('Generated Recipes:', generatedRecipes); // Check the output
      navigateToFoodSuggestions([generatedRecipes, route],route);

    } catch (error) {
      console.error("Error generating recipes:", error);
    } finally {
      setLoading(false);
    }
  };

  // Render sliders and button if no suggestions yet
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
      <Slider value={veggie} onChange={(e, val) => setVeggie(val)} min={1} max={10} step={1} />
      <Typography>Vegetarian Preference: {veggie}</Typography>
      <Slider value={time} onChange={(e, val) => setTime(val)} min={1} max={10} step={1} />
      <Typography>Time of Day: {time}</Typography>

      <Button variant="contained" color="primary" onClick={handleGenerateRecipes} sx={{ marginTop: 2 }} disabled={loading}>
        {loading ? "Loading..." : "Generate Food Suggestions"}
      </Button>
    </Box>
  );
};

export default TestingPage;
