import Component from "../core/Component.js";
import { store } from "../store.js"

export default class MyColaItemList extends Component {
  template() {
    const { myColaItems } = store.getState();

    return `
      ${myColaItems.map(({ source, name, quantity }) => `
        <li class="item-myCola">
          <img src="${source}" alt="" class="img-myCola" />
          <strong class="txt-myColaName">${name}</strong>
          <span class="txt-myColaQuantity">${quantity}</span>
        </li>
      `).join("")}
    `;
  }

  setEvent() {

  }
}