import React, { Component } from 'react';
import PropTypes from 'prop-types';
import  './BurgerIngredient.css';
//import './hi.css'; 

class BurgerIngredient extends Component {
    render () {
 let ingredient = null;
        debugger
        switch ( this.props.type ) {
            case ( 'bread-bottom' ):
                ingredient = <div className={"BreadBottom"}>bottom</div>;
                break;
            case ( 'bread-top' ):
            ingredient = (
                    <div className={"BreadTop"}>
                        <div className={"Seeds1"}>seed1</div>
                        <div className={"Seeds2"}>seed2</div>
                    </div>
                );
                break;
            case ( 'meat' ):
                ingredient = <div className={"Meat"}>meat </div>;
                break;
            case ( 'cheese' ):
                ingredient = <div className={"Cheese"}>cheese</div>;
                break;
            case ( 'bacon' ):
                ingredient = <div className={"Bacon"}>bacon</div>;
                break;
            case ( 'salad' ):
            console.log("hi");
                ingredient = <div className={"Salad"}>salad<div className="hi">hi</div></div>;
                break;
            default:
                ingredient = null;
        }
// ingredient = <div>salad<div className="hi">hi</div></div>;
       return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;