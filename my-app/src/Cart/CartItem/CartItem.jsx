
import React from "react";
import classes from '/Users/artem/Desktop/React-App/my-app/src/Cart/CartItem/CartItem.module.css'
import DeleteButton from "/Users/artem/Desktop/React-App/my-app/src/Cart/CartItem/CartComponents/DeleteButton.jsx";
import Count from "/Users/artem/Desktop/React-App/my-app/src/Cart/CartItem/CartComponents/Count.jsx";


const CartItem = ({roll, DeleteRoll,Increase,decrease }) => {
    const { title, priceTotal, count ,id, img} = roll;

    return ( 
        
        <div className={classes.ItemPosition}>
            
        <img className={classes.ProductsInCart} src={ `${img}`} alt={title}/>
        <p className={classes.ProductsCartText}>{title}</p>
        <DeleteButton DeleteRoll={DeleteRoll}  id={id} className={classes.DeleteButton} ></DeleteButton>  
        
        <div className={classes.CartPrice}>{priceTotal}p.</div>
        <Count Increase={Increase} decrease={decrease} id={id} count={count} ></Count>
        
        </div>
  
     );
}
 
export default CartItem;