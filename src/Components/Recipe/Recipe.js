import React from 'react';
import Card from './card/card';

const Recipe = (props) => {
    let tags = [["Non-vegetarian","Breakfast"],["Mexican","Lunch"],["India"]];
    return (
        <Card title='Pizza' tags={tags}>
        </Card>
    );
}

export default Recipe;
