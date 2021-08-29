import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";
import { useDispatch } from "react-redux";

const MainHeader = (props) => {
  const dispatch = useDispatch();
  function toogleHandler() {
    dispatch({ type: "toogle" });
  }
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton onToogle={toogleHandler} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
