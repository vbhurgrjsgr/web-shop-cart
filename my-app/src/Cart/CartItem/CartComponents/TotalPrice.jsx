import classes from '/Users/artem/Desktop/React-App/my-app/src/Cart/CartItem/CartItem.module.css'

const TotalPrice = ({total}) => {
    const {price} = total;
    return ( 

        <div className={classes.TotlaPrice}>
        <div className={classes.TotlaPriceText}>К оплате: </div>
        <div className={classes.TotlaPriceInComponent}>
            {price}руб. 
        </div>
          <div className={classes.TotalPriceLine}></div>
        </div>
        
     );
};
 
export default TotalPrice;  