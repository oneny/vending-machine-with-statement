import Component from "../core/Component.js";
import { store, ADD_CART, UPDATE_CART, REDUCE_COLA } from "../store.js";

export default class ColaItems extends Component {
  template() {
    const { colaItems } = store.getState();

    return `
      ${colaItems.map(({ id, source, name, price, quantity }) => `
        <li data-id="${id}">
          <button
            class="btn-item ${quantity <= 0 && "sold-out"}"
            disable="${quantity <= 0 ? "true" : "false"}"
          >
            <img src="${source}" alt="" class="img-item" />
            <strong class="txt-name">${name}</strong>
            <span class="txt-price">${price}</span>
            ${quantity <= 0 ? `
              <img src="./src/img/beverageImg/Sold-out.png" alt="품절" class="img-soldOut" />
            ` : ""}
          </button>
        </li>
      `).join("")}
    `;
  }

  setEvent() {
    const { $el } = this;
    const { colaItems, cartItems } = store.getState();

    $el.querySelectorAll(".btn-item").forEach((item) => {
      item.addEventListener("click", ({ target }) => {
        const cola = colaItems.find((item) =>
          item.id === target.closest("[data-id]").dataset.id);
        const cartItemIndex = cartItems.findIndex((item) =>
          item.colaId === target.closest("[data-id]").dataset.id);

        if (cartItemIndex === -1) {
          store.dispatch({ type: ADD_CART, payload: cola });
        } else {
          store.dispatch({
            type: UPDATE_CART,
            payload: target.closest("[data-id]").dataset.id,
          })
        }

        store.dispatch({
          type: REDUCE_COLA,
          payload: target.closest("[data-id]").dataset.id,
        })
      });
    })
  }
}