import React from 'react'
import  './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) =>{
    let transformedIngredients = Object.keys(props.ingredients)
    .map(igkey => {
        return [...Array(props.ingredients[igkey])].map((_,i)=>{
          return  <BurgerIngredient key={igkey + i} type={igkey}/>;
        });
    })
    .reduce((arr,el)=> {
        return arr.concat(el)
    }, []);
    //console.log(transformedIngredients);

    if(transformedIngredients.length === 0)
    {
            transformedIngredients = <p>pls add ingredients</p>  
          }

    return (
            <div className={"Burger"}>
            <h1>burgerjs</h1>
            <BurgerIngredient type="bread-top" />
           {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />

            </div>
    );

};

export default burger;