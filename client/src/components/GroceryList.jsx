import React from 'react';
import GroceryItem from './GroceryItem.jsx'

const GroceryList = (props) => (
  <div className="groceries">
    {
      props.groceries.map((item) =>
      <GroceryItem item = {item} key={item.id}/>
      )

    }
  </div>
)

export default GroceryList;
