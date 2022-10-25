import Component from "../core/Component.js";
import { INCREASE_COLA, REDUCE_CART, REMOVE_CART, store } from "../store.js";

export default class CartList extends Component {
  template() {
    const { cartItems } = store.getState();

    return `
      ${cartItems.map(({ colaId, source, name, quantity }) => `
        <li data-cola-id="${colaId}">
          <button class="btn-cart">
            <img src="${source}" alt="" class="img-cart" />
            <strong class="txt-cartName">${name}</strong>
            <span class="txt-cartPrice">${quantity}</span>
          </button>
        </li>
      `).join("")}
    `
  }

  setEvent() {
    const { $el } = this;
    const { cartItems } = store.getState();
  
    $el.querySelectorAll(".btn-cart").forEach((item) => {
      item.addEventListener("click", ({ target }) => {
        const colaId = target.closest("[data-cola-id]").dataset.colaId;

        const colaItem = cartItems.find(item => item.colaId === colaId);
        if (colaItem.quantity <= 1) {
          store.dispatch({ type: REMOVE_CART, payload: colaId });
        } else {
          store.dispatch({ type: REDUCE_CART, payload: colaId });
        }

        store.dispatch({ type: INCREASE_COLA, payload: colaId });
      });
    });
  }
}