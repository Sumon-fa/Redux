import { createStore } from "redux";

const initialState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
  showCart: false,
};

function cartReducer(state = initialState, action) {
  if (action.type === "toogle") {
    return {
      showCart: !state.showCart,
      totalQuantity: state.totalQuantity,
      items: state.items,
      totalPrice: state.totalPrice,
    };
  }

  if (action.type === "add") {
    const updatedTotalPrice =
      state.totalPrice + action.item.price / action.item.amount;
    const totalAmount = state.totalQuantity + 1;
    //when we use form to set amount then we use """const quantity = state.totalQuantity + action.item.amount;
    //when we use only dummy arrray we use above quanti
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    var updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + 1,
        //when we use form to set amount then we use """amount: existingCartItem.amount + action.item.amount,;
        //when we use only dummy arrray we use above amount and price is price: existingCartItem.price + action.item.price,
        price: existingCartItem.price + action.item.price / action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
      console.log(updatedItems);
    }

    return {
      items: updatedItems,
      totalPrice: updatedTotalPrice,
      totalQuantity: totalAmount,
      showCart: state.showCart,
    };
  }

  if (action.type === "remove") {
    const totalAmount = state.totalQuantity - 1;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];

    const updatedTotalPrice =
      state.totalPrice - existingItem.price / existingItem.amount;
    console.log(updatedTotalPrice);
    let updatedItems;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingItem,
        price: existingItem.price - existingItem.pricePerItem,
        amount: existingItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
      console.log(updatedItems);
    }

    return {
      items: updatedItems,
      totalPrice: updatedTotalPrice,
      totalQuantity: totalAmount,
      showCart: state.showCart,
    };
  }

  return state;
}
const store = createStore(cartReducer);
export default store;
