
//Recipe card .js



import React from 'react';
import Card from './card/card';

const RecipeCard = (props) => {
    let tags = [["cheese","Breakfast"],["Mexican","Lunch"],["India"]];
    let category = "veg";
    return (
        <Card title='Margherita Pizza with Cheese Burst' tags={tags} category={category}/>
    );
}

export default RecipeCard;


