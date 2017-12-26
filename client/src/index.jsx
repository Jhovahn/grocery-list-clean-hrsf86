import React from 'react';
import ReactDOM from 'react-dom';
import GroceryList from './components/GroceryList.jsx';
import groceryList from '../../database/data.js';
import AddGrocery from './components/AddGrocery.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = groceryList

  }



  render () {
    console.log(this.state)
    return (
      <div>
        <div><AddGrocery/></div>
        <div><GroceryList groceries={groceryList.groceryList}/></div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
