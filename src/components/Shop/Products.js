import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const Products = (props) => {
  const [cart, setCart] = useState([]);
  const dispatch = useDispatch();
  function addItemHandler(item) {
    dispatch({ type: "add", item: item });
  }
  useEffect(() => {
    const fetchCart = async () => {
      const url =
        "https://react-http-e353e-default-rtdb.europe-west1.firebasedatabase.app/cart.json";
      const response = await fetch(url);

      const data = await response.json();

      const loadedData = [];
      for (const key in data) {
        loadedData.push({
          id: key,
          title: data[key].title,
          amount: data[key].amount,
          price: data[key].price,
          description: data[key].description,
        });
      }
      setCart(loadedData);
    };
    fetchCart();
  }, []);

  /*function addToCartHandler(items) {
    addItemHandler({
      id: items.id,
      title: items.title,
      price: props.price,
      description: items.description,
      amount: items.amount,
      pricePerItem: items.price,
    });
  }*/

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {cart.map((items) => (
          <ProductItem
            key={items.id}
            id={items.id}
            amount={items.amount}
            title={items.title}
            price={items.price}
            description={items.description}
            onAdd={addItemHandler}
            //onAddcart={addToCartHandler.bind(null, items)}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
