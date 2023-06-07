import React from "react";
import classes from '/Users/artem/Desktop/React-App/my-app/src/components/cart/Jsx_Components/Components.module.css'

const DeleteButton= ({DeleteRoll, id}) => {
    return (
        <button onClick={()=>{DeleteRoll(id);}} className={classes.deleteBtn}>
            Удалить
        </button>
    )
}

export default DeleteButton;