import React from "react";
import classes from '/Users/artem/Desktop/React-App/my-app/src/components/cart/Jsx_Components/Components.module.css'

const Count = ({count, Increase, decrease, id}) => {
   
    return ( 
        <div className={classes.count}>
          <input type='count' disabled min='1' className={classes.countInput} value={count}/>   
          <div>
            <button className={classes.Decrement} onClick={()=>{decrease(id)}}> - </button> 
            <button className={classes.Increment} onClick={()=>{Increase(id)}}> + </button>
         </div>   
        </div>
     );
};
 
export default Count;