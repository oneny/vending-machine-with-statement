import Component from "../core/Component.js";
import { DEPOSIT_MONEY, store } from "../store.js";
import toKRW from "../utils/toKRW.js"

export default class myMoneyBtn extends Component {
  template() {
    const { myOwnMoney } = store.getState();
    return `
      <button class="btn-mymoney">
        소지금:
        <span class="txt-mymoney">${toKRW(myOwnMoney)}</span>
      </button>
    `;
  }

  setEvent() {
    const { $el } = this;

    $el.querySelector(".btn-mymoney").addEventListener("click", () => {
      let myMoney = prompt("소지금을 입력해주세요.");

      while (true) {
        // 문자가 들어있는 경우
        // 문자가 들어있는 경우
        if (isNaN(myMoney) && myMoney !== null) {
          alert("금액을 입력해주세요.");
          myMoney = prompt("소지금을 입력해주세요.");
          continue;
        }

        // 취소를 눌렀을 경우
        if (myMoney === null || myMoney.length === 0)
          return console.log('hi');
        break;
      }

      store.dispatch({ type: DEPOSIT_MONEY, payload: myMoney });
    });
  }
}
