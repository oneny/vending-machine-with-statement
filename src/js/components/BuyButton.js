import Component from "../core/Component.js";
import { BUY_CARTITEMS, store } from "../store.js";

export default class BuyButton extends Component {
  template() {
    return `
      <button class="btn-get">획득</button>
    `;
  }

  setEvent() {
    const { $el } = this;
    const { myColaItems, cartItems, myBalance } = store.getState();

    $el.querySelector(".btn-get").addEventListener("click", () => {
      const totalPrice = cartItems.reduce((prev, { price, quantity }) => (
        prev + price * quantity
      ), 0);
      if (totalPrice > myBalance) return alert("입금액이 부족합니다!");

      const payload = {
        cartItems,
        totalPrice
      }
      
      store.dispatch({ type: BUY_CARTITEMS, payload })
    });
  }
}