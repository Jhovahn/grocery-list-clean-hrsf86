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
      const target = event.target;
      const name = target.name;
      this.setState((prevState, props) => {
        return {
          quantity: prevState.counter + props.step}
      })
      console.log(this.state)
    }

    handleSubmit(event) {
      event.preventDefault()
    }


  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Description:
            <input
              name="description"
              type="text"
              value={this.state.description}/>
              {console.log("state:",this.state)}
              {console.log(groceryList)}
        </label>
        <br/>
        <label>
          Quantity:
            <input
              name="quantity"
              type="text"
              value={this.state.quantity}
              />
        </label>
        <input type="submit" onClick={this.handleInputChange}/>
      </form>
    );
  }
}

export default AddGrocery;
