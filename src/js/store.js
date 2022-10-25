import { createStore } from "./core/Store.js";
import colaItems from "./dummy/colaItems.js";
import cartItems from "./dummy/cartItems.js";
import myColaItems from "./dummy/myColaItems.js";

const initState = {
  isFilter: 0,
  colaItems,
  cartItems,
  myColaItems,
  myOwnMoney: 25000, // 소지금
  myBalance: 0, // 잔액
  currentPage: 0,
};

export const REDUCE_COLA = "REDUCE_COLA";
export const INCREASE_COLA = "INCREASE_COLA";

export const ADD_CART = "ADD_CART";
export const UPDATE_CART = "UPDATE_CART";
export const REDUCE_CART = "REDUCE_CART";
export const REMOVE_CART = "REMOVE_CART";

export const DEPOSIT_MONEY = "DEPOSIT_MONEY";

export const store = createStore((state = initState, action = {}) => {
  switch (action.type) {
    case INCREASE_COLA:
      return {
        ...state,
        colaItems: state.colaItems.map((item) =>
          item.id === action.payload ? { ...item, quantity: ++item.quantity } : item),
      }
    case REDUCE_COLA:
      return {
        ...state,
        colaItems: state.colaItems.map((item) =>
          item.id === action.payload ? { ...item, quantity: --item.quantity } : item),
      }
    case ADD_CART:
      const { id: colaId, name, price, source } = action.payload;
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          { colaId, name, price, source, quantity: 1 },
        ],
      };
    case UPDATE_CART:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.colaId === action.payload
            ? { ...item, quantity: ++item.quantity }
            : item
        ),
      };
    case REDUCE_CART:
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.colaId === action.payload ? { ...item, quantity: --item.quantity } : item)
      }
    case REMOVE_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(({ colaId }) => colaId !== action.payload),
      };
    case DEPOSIT_MONEY:
      return {
        ...state,
        myOwnMoney: action.payload,
      }
    default:
      return initState;
  }
});
