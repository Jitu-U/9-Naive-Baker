import React from 'react';
import Classes from './ingredients.module.css';

const ingredients = (props) => {
    let displayIngredients=[];
    for(let i=0;i<props.ingredientsList.length;i++){
        displayIngredients.push(
            <div className={Classes.Flex}>
                <div className={Classes.Left}>
                    <p className={`${Classes.IngredientsText} ${Classes.LeftPushh}`}>{props.ingredientsList[i][0]}</p>
                </div>
                <div className={Classes.Middle}>
                    <p className={`${Classes.IngredientsText} ${Classes.MiddlePushh}`}>{props.ingredientsList[i][1]}</p>
                </div>
                <div className={Classes.Right}>
                    <p className={`${Classes.IngredientsText} ${Classes.RightPushh}`}>{props.ingredientsList[i][2]}</p>
                </div>
            </div>
        );
    }
    return (
        <div className={Classes.Background}>
            <p className={Classes.Heading}>Ingredients Details</p>
            <div className={Classes.Flex}>
                <div className={Classes.Left}>
                    <p className={`${Classes.SubHeading} ${Classes.LeftPush}`}>Ingredient</p>
                </div>
                <div className={Classes.Middle}>
                    <p className={Classes.SubHeading}>Instructions before cooking</p>
                </div>
                <div className={Classes.Right}>
                    <p className={`${Classes.SubHeading} ${Classes.RightPush}`}>Quantity</p>
                </div>
            </div>
            {displayIngredients}
        </div>
    );
}

export default ingredients;