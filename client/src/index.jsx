import React from 'react';
import ReactDOM from 'react-dom';
import GroceryList from './components/GroceryList.jsx';
import groceryList from '../../database/data.js';
import AddGrocery from './components/AddGrocery.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: groceryList.groceryList
    }

  }



  render () {

    return (
      <div>
        <div><AddGrocery/></div>
        <div><GroceryList groceries={this.state.list}/></div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
