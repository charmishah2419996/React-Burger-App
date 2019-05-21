import React, { Component } from 'react';

import './App.css';
import Layout from './components/Layout/Layout' 
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';


class App extends Component {
  render(){
    return (
      <div>
        <h1>hj</h1>
       <Layout>
        <BurgerBuilder></BurgerBuilder>      
         </Layout>
      </div>
    );
  }
}

export default App;
