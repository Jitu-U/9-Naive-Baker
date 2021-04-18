<<<<<<< Updated upstream
//Recipe card .js
=======


import React from 'react';
import Card from './card/card';

const RecipeCard = (props) => {
    let tags = [["cheese","Breakfast"],["Mexican","Lunch"],["India"]];
    let category = "veg";
    return (
        <Card title='Pizza' tags={tags} category={category}>
        </Card>
    );
}

export default RecipeCard;


>>>>>>> Stashed changes
