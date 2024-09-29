import React from 'react';
import { Box, Typography } from '@mui/material';

const FoodSuggestions = ({ route,recipes }) => {
  return (
    <Box sx={{ width: '80%', margin: 'auto', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Food Suggestions Based on Your Preferences
      </Typography>
      <Typography variant="body1">
        Based on the predicted route: <strong>{route}</strong>, here are some food suggestions:
      </Typography>

      {/* This is where you'd list the suggestions; for now, we'll mock some data */}
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h6">Suggested Dishes:</Typography>
        <ul>
          <li>Light & Sweet Salad</li>
          <li>Mild Vegetarian Stir-fry</li>
          <li>Western-style Light Pasta</li>
          {/* More suggestions based on route */}
        </ul>
      </Box>
    </Box>
  );
};

export default FoodSuggestions;
