import React from "react";
import { Typography, Box, Card, CardContent, List, ListItem, Divider, Link } from "@mui/material";

const FoodSuggestions = ({ route, recipe }) => {
  console.log("suggesting:", route);

  const link = "https://docs.google.com/forms/d/e/1FAIpQLScKDfNRn1s2uf9hjdQPRJz57ugZgonCVUKQqhnWFoLf-KbS5w/viewform?embedded=true"
  if (!recipe) {
    return <Typography>No recipe found.</Typography>; // Handle case when recipe is undefined
  }

  return (
    <Box sx={{ padding: 2, maxWidth: 600, margin: "auto" }}>
      <Typography variant="h4" gutterBottom align="center">
        Food Suggestions
      </Typography>

      {/* Clickable Route Link */}
      <Typography variant="h6">
        Predicted Route:{" "}
        <Link href={link} target="_blank" rel="noopener noreferrer" underline="hover">
          {route}
        </Link>
      </Typography>

      <Card variant="outlined" sx={{ marginTop: 2 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {recipe.recipe_title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Cook Time: {recipe.cook_time} minutes
          </Typography>
          <Divider sx={{ margin: "10px 0" }} />
          <Typography variant="h6">Ingredients:</Typography>
          <List>
            {recipe.ingredients.map((ingredient, i) => (
              <ListItem key={i}>
                <Typography variant="body2">{ingredient}</Typography>
              </ListItem>
            ))}
          </List>
          <Divider sx={{ margin: "10px 0" }} />
          <Typography variant="h6">Instructions:</Typography>
          <Typography variant="body2">{recipe.instructions}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default FoodSuggestions;
