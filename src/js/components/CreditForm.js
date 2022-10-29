import Component from "../core/Component.js";
import { CREDIT_MONEY, store } from "../store.js";
import { toNum } from "../utils/toKRW.js";

export default class CreditForm extends Component {
  template() {
    return `
      <label for="inp-credit" class="ir">입금액</label>
      <input id="inp-credit" class="inp-credit" type="text" placeholder="입금액 입력">
      <button class="btn-credit">입금</button>
    `;
  }

  setEvent() {
    const { $el } = this;
    const { myOwnMoney, myBalance } = store.getState();
    const $inpCreditEl = $el.querySelector(".inp-credit");
    
    $el.querySelector(".btn-credit").addEventListener("click", () => {
      let inpMoney = $inpCreditEl.value;

      // 입금액을 입력하지 않았거나 숫자가 아닌 문자가 들어간 경우
      if (inpMoney.length <= 0 || isNaN(inpMoney)) {
        alert("금액을 입력해주세요.");
        return $inpCreditEl.value = "";
      }

      // 소지금보다 입금액이 더 많은 경우
      if (inpMoney > myOwnMoney) {
        return alert ("소지금이 부족합니다.");
      }

      store.dispatch({ type: CREDIT_MONEY, payload: parseInt(inpMoney) });
    });
  }
}
