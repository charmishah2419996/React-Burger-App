import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl'

const controls =[
        {Label :'Salad', type : 'salad'},
        {Label :'Bacon', type : 'bacon'},
        {Label :'Meat', type :'meat'}
];

const buildControls = (props) => (

    <div className={"BuildControls"}>
            {controls.map(ctrl=>(
                <BuildControl 
                        key={ctrl.Label} 
                        Label={ctrl.Label}
                    
                        added={() => props.ingredientAdded(ctrl.type)}
                        removed={() => props.ingredeientRemove(ctrl.type)}
                />
            ))}
    </div>

);


export default buildControls;