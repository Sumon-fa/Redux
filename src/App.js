import { useEffect } from "react";
import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const cart = useSelector((state) => state.items);
  useEffect(() => {
    const fetchCart = async () => {
      const response = await fetch(
        "https://react-http-e353e-default-rtdb.europe-west1.firebasedatabase.app/orderCart.json",
        {
          method: "POST",
          body: JSON.stringify(cart),
          headers: { "Content-type": "application/json" },
        }
      );
      const data = await response.json();
      console.log(data);
    };
    fetchCart();
  }, [cart]);
  return (
    <Layout>
      <Cart />
      <Products />
    </Layout>
  );
}

export default App;
