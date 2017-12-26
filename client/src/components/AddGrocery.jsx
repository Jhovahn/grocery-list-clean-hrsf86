import React from 'react';
import groceryList from '../../../database/data.js';

class AddGrocery extends React.Component {

    constructor(props) {
      super(props);
      this.state = groceryList
      this.handleInputChange = this.handleInputChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInputChange(event) {
        // const {currItems} = this.state;
        const {newItem} = {test:1};

        this.setState({
          groceryList: [...this.state.groceryList, {id:1,quantity:Number(this.quantity.value), description:this.description.value}]
        })


    }

    handleSubmit(event) {
      event.preventDefault()

    }


  render () {
    return (
      <div>
      <div>
        <h2>GroceryList</h2>
      </div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Description:
            <input
              name="description"
              type="text"
              value={this.state.description}
              ref={ input => this.description = input}
              />
              {console.log("state:",this.state)}

        </label>
        <br/>
        <label>
          Quantity:
            <input
              name="quantity"
              type="integer"
              value={this.state.quantity}
              ref={input => this.quantity = input}
              />
        </label>
        <input type="submit" onClick={this.handleInputChange}/>
      </form>
      <div>
        {() => this.state}
      </div>
      </div>
    );
  }
}

export default AddGrocery;
