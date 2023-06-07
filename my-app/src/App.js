import React from 'react';
import '/Users/artem/Desktop/React-App/my-app/src/styles/App.css';
import Cart from './Cart/cart.jsx';
import CartPost from './Item/CartPost';

function App() {

 
  return(
    <div className="App">
      <h1 id="greeting" className='styleH1'>Корзина с товарами</h1>
      
      <Cart/>
    </div>
  )

}

export default App;
