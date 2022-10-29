import Component from "../core/Component.js";
import { RETURN_MONEY, store } from "../store.js";
import toKRW from "../utils/toKRW.js";

export default class BabanceForm extends Component {
  template() {
    const { myBalance } = store.getState();
    return `
      <div class="info-balance">
        잔액:
        <span class="txt-balance">${toKRW(myBalance)}</span>
      </div>
      <button class="btn-balance">거스름돈 반환</button>
    `;
  }

  setEvent() {
    const { $el } = this;
    const { myOwnMoney, myBalance } = store.getState();
   
    $el.querySelector(".btn-balance").addEventListener("click", () => {
      if (myBalance === 0) return; // 0원이면 로직 수행할 필요X

      store.dispatch({ type: RETURN_MONEY });
    });
  }
}
