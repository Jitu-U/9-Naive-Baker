import React from 'react';
import Classes from './instruction.module.css';

const instruction = (props) => {
    let displayData = [];
    for(let i=0;i<props.instructionData.length;i++){
        displayData.push(
            <li>{props.instructionData[i]}</li>
        );
    }
    return (
        <div className={Classes.Background}>
            <p className={Classes.Heading}>Instruction</p>
            <ol>
                {displayData}
            </ol>
        </div>
    );
}

export default instruction;