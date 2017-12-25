import React from 'react';

const GroceryItem = (props) => (
  <div>
    <div>{props.item.description} {props.item.quantity}</div>
  </div>
)

export default GroceryItem;
