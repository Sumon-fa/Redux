import classes from "./CartItem.module.css";
import { useSelector } from "react-redux";
const CartItem = (props) => {
  //const totalPrice = useSelector((state) => state.totalPrice);

  const price = `$${Number(props.price).toFixed(2)} `;
  const totalPrice = useSelector((state) => state.totalPrice.toFixed(2));

  // console.log(totalPrice);
  return (
    <li className={classes.item}>
      <header>
        <h3>{props.title}</h3>
        <div className={classes.price}>
          {price}{" "}
          <span className={classes.itemprice}>
            ({props.pricePerItem})/item)
          </span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{props.amount}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={props.onRemove}>-</button>
          <button onClick={props.onAdd}>+</button>
        </div>
        <p>{totalPrice}</p>
      </div>
    </li>
  );
};

export default CartItem;
