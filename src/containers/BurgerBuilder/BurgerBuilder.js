import React,{Component} from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const ingredientsPrices = {
    salad :0.5,
    bacon : 0.4,
    cheese: 1.3,
    meat :0.7
};

class BurgerBuilder extends Component{

    // constructor(props){
    //     super(props);
    //     this.state = {...};
    // }

    state = {
          ingredients :{
            salad :0,
            bacon : 0,
            cheese: 0,
            meat :0
        },
        totalPrice:4

    }

    addIngredientHandler = (type) => {

        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients={
            ...this.state.ingredients
            
        };
        updatedIngredients[type] = updatedCount;
        const priceaddition = ingredientsPrices[type];
        const oldprice =this.state.totalPrice;
        const newprice = oldprice + priceaddition;
        this.setState({totalPrice: newprice,ingredients: updatedIngredients});

        
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount - 1;
        const updatedIngredients={
            ...this.state.ingredients
            
        };
        updatedIngredients[type] = updatedCount;
        const pricededection = ingredientsPrices[type];
        const oldprice =this.state.totalPrice;
        const newprice = oldprice - pricededection;
        this.setState({totalPrice: newprice,ingredients: updatedIngredients});

    }

     render() {
         return(
             <Aux>
             <Burger ingredients = {this.state.ingredients} />
            <BuildControls 
            ingredientAdded={this.addIngredientHandler}
            ingredeientRemove={this.removeIngredientHandler} />
             </Aux>
         );
     }

}


export default BurgerBuilder;