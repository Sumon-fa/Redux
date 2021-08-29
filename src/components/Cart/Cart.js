import { Fragment } from "react";
import { useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useDispatch } from "react-redux";

const Cart = (props) => {
  const showCart = useSelector((state) => state.showCart);
  const cartItems = useSelector((state) => state.items);
  const hasItems = cartItems.length > 0;
  const dispatch = useDispatch();
  function addCartHandler(item) {
    dispatch({ type: "add", item: item });
  }
  function removeCartHandler(id) {
    dispatch({ type: "remove", id: id });
  }

  console.log(cartItems);
  return (
    <Fragment>
      {showCart && (
        <Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>

          <ul>
            {hasItems &&
              cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  amount={item.amount}
                  title={item.title}
                  price={item.price}
                  pricePerItem={item.pricePerItem}
                  description={item.description}
                  onAdd={addCartHandler.bind(null, item)}
                  onRemove={removeCartHandler.bind(null, item.id)}
                />
              ))}
            {!hasItems && (
              <CartItem
                pricePerItem="0"
                amount="0"
                title=""
                price="0"
                description=""
              />
            )}
          </ul>
        </Card>
      )}
    </Fragment>
  );
};

export default Cart;
