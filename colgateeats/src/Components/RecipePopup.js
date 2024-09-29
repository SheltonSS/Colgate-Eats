import React from "react";
import { Typography, Box, Button, List, ListItem, Divider, Card, CardContent, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const RecipePopup = ({
    title = "No Title",
    description = "No description available.",
    ingredients = [],
    instructions = [],
    closeRecipePopup,
}) => {
    return (
        <Box
            sx={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1000,
                width: "90%",
                maxWidth: "450px", // Shortened width for more compact design
                bgcolor: "background.paper",
                boxShadow: 24,
                p: 2, // Reduced padding
                borderRadius: 2,
            }}
        >
            <Card sx={{ padding: 2, position: "relative" }}>
                <CardContent>
                    {/* Close Button */}
                    <IconButton
                        sx={{ position: "absolute", top: 8, right: 8 }}
                        onClick={closeRecipePopup}
                    >
                        <CloseIcon />
                    </IconButton>

                    {/* Title */}
                    <Typography variant="h5" align="center" gutterBottom>
                        {title}
                    </Typography>

                    {/* Description */}
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                        {description}
                    </Typography>

                    <Divider sx={{ marginY: 1.5 }} />

                    {/* Ingredients */}
                    <Typography variant="h6">Ingredients</Typography>
                    <List>
                        {ingredients.length > 0 ? (
                            ingredients.map((ingredient, index) => (
                                <ListItem key={index}>
                                    <Typography variant="body2">{ingredient}</Typography>
                                </ListItem>
                            ))
                        ) : (
                            <Typography variant="body2">No ingredients provided.</Typography>
                        )}
                    </List>

                    <Divider sx={{ marginY: 1.5 }} />

                    {/* Instructions */}
                    <Typography variant="h6">Instructions</Typography>
                    <List component="ol" sx={{ paddingLeft: 2 }}>
                        {instructions.length > 0 ? (
                            instructions.map((instruction, index) => (
                                <ListItem key={index} component="li">
                                    <Typography variant="body2">{instruction}</Typography>
                                </ListItem>
                            ))
                        ) : (
                            <Typography variant="body2">No instructions provided.</Typography>
                        )}
                    </List>

                    {/* Action Buttons */}
                    <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            onClick={closeRecipePopup}
                            sx={{ marginRight: 1 }}
                        >
                            Close
                        </Button>
                        <Button 
                            variant="contained" 
                            color="secondary"
                        >
                            Find Directions
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default RecipePopup;
