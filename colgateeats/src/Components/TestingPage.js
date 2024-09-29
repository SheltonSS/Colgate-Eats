import React, { useState } from "react";
import { Slider, Button, Typography, Box } from "@mui/material";
import generateRecipe from "../Helperfunctions/generateRecipe"; // Adjust the path as necessary
import { predictRoute } from "../Helperfunctions/IngredientRoutePredictor";

const TestingPage = ({ navigateToFoodSuggestions }) => {
  const [light, setLight] = useState(3);
  const [sweet, setSweet] = useState(3);
  const [mild, setMild] = useState(3);
  const [veggie, setVeggie] = useState(3);
  const [time, setTime] = useState(3);
  const [mealTime, setMealTime] = useState('breakfast');
  const [cuisine, setCuisine] = useState('asian');
  const [skillLevel, setSkillLevel] = useState('beginner');
  const [loading, setLoading] = useState(false);

  // Function to generate recipes and predict the route
  const handleGenerateRecipes = async () => {
    setLoading(true);

    // Example time range (could be based on a slider)
    const timeRange = [30, 60];

    try {
      // Generate recipes based on user preferences
      const generatedRecipes = await generateRecipe(sweet, mild, veggie, mealTime, timeRange, cuisine, skillLevel);
      
      if (!generatedRecipes || !generatedRecipes.ingredients) {
        throw new Error("No recipes or ingredients found");
      }

      // Predict the route based on the first recipe's ingredients
      const route = await predictRoute(generatedRecipes.ingredients);

      // Pass the predicted route and generated recipes to the next page
      navigateToFoodSuggestions(route, [generatedRecipes]); // Ensure you pass an array for recipes
    } catch (error) {
      console.error("Error generating recipes or predicting route:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ width: 300, margin: 'auto', textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom>
        Food Preference Sliders
      </Typography>

      {/* Sliders for different preferences */}
      <Typography>Lightness: {light}</Typography>
      <Slider value={light} onChange={(e, val) => setLight(val)} min={1} max={10} step={1} />

      <Typography>Sweetness: {sweet}</Typography>
      <Slider value={sweet} onChange={(e, val) => setSweet(val)} min={1} max={10} step={1} />

      <Typography>Mildness: {mild}</Typography>
      <Slider value={mild} onChange={(e, val) => setMild(val)} min={1} max={10} step={1} />

      <Typography>Vegetarian Preference: {veggie}</Typography>
      <Slider value={veggie} onChange={(e, val) => setVeggie(val)} min={1} max={10} step={1} />

      <Typography>Time of Day: {time}</Typography>
      <Slider value={time} onChange={(e, val) => setTime(val)} min={1} max={10} step={1} />

      {/* Button to generate suggestions */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleGenerateRecipes}
        sx={{ marginTop: 2 }}
        disabled={loading}
      >
        {loading ? "Loading..." : "Generate Food Suggestions"}
      </Button>
    </Box>
  );
};

export default TestingPage;
