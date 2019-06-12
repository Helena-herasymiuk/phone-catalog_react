import React from 'react';

const Cart = (props) => (
  <section>
    <p>Shopping Cart</p>
    <ul>
      { Object.entries(props.name).map(([item, index]) => (
        <li key={item + index}>
          {item} - {index}
          <button onClick ={()=> {
            props.onDeletePhone(item)}}
          >
          x</button>
        </li>
      )) }
    </ul>
  </section>
);

export default Cart;