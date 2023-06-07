
import classes from '/Users/artem/Desktop/files/React-App/my-app/src/Cart/cart.module.css'
import data from '/Users/artem/Desktop/files/React-App/my-app/src/данные/data.js'
import { useEffect, useState } from 'react';
import CartItem from '/Users/artem/Desktop/files/React-App/my-app/src/Cart/CartItem/CartItem.jsx';
import TotalPrice from '/Users/artem/Desktop/files/React-App/my-app/src/Cart/CartItem/CartComponents/TotalPrice.jsx';


const Cart = () => {
  
  const [cart, setCart ] = useState(data);


  const [total, setTotal] = useState({
    price: cart.reduce((prev,curr)=>{return prev + curr.priceTotal}, 0),
  })

  useEffect(()=> {
    setTotal ({
      price: cart.reduce((prev,curr)=>{return prev + curr.priceTotal}, 0),
    });
  }, [cart])

  const DeleteRoll = (id) => {

    setCart ((cart) => cart.filter((roll) =>  id !== roll.id));
  }

  const Increase = (id) => {
    setCart ((cart) => cart.map((roll) =>  {
      if (roll.id === id){
        return {
          ...roll,
          count: +roll.count+1,
          priceTotal: roll.priceTotal + roll.price
        };
      }
      return roll
    }));
  } 

  const decrease = (id) => {
    setCart ((cart) => cart.map((roll) =>  {
      if (roll.id === id){


        const newCount = roll.count - 1 > 1 ? roll.count - 1 :1;
        return {
          ...roll,
          count:newCount,
          priceTotal: (newCount)*roll.price
        };
      }
      return roll
    }));
  } 

  const rolls = cart.map((roll) => {
      return <CartItem  roll={roll}  key={roll.id} DeleteRoll={DeleteRoll} Increase={Increase} decrease={decrease} />;
  })

    return (  
      <div>

      <div className={classes.Cart}>
        <h2>Ваш заказ</h2>
        {rolls}
        <div className={classes.deliveryGroup}>
            <h1 className={classes.delivery}>Доставка:</h1>
            <h2 className={classes.deliverySell}>Бесплатно</h2>
            <h3 className={classes.smallText} >при покупке от 600 р</h3>
        </div>
        <TotalPrice total={total}/>
      </div>
     </div> 

    );

}
 
export default Cart;
