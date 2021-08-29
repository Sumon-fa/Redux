import classes from "./CartButton.module.css";
import { useSelector } from "react-redux";

const CartButton = (props) => {
  const numberOfCartItems = useSelector((state) => state.totalQuantity);

  return (
    <button className={classes.button} onClick={props.onToogle}>
      <span>My Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default CartButton;
