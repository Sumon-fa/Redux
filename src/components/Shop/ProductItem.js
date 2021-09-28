import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
const ProductItem = (props) => {
  //const { title, price, description } = props;
  function addToCartHandler() {
    props.onAdd({
      id: props.id,
      title: props.title,
      price: props.price,
      description: props.description,
      amount: props.amount,
      pricePerItem: props.price,
    });
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{props.title}</h3>
          <div className={classes.price}>{props.price}</div>
        </header>
        <p>{props.description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
