import ColaItems from "./components/ColaList.js";
import CartList from "./components/CartList.js";
import MyColaItemList from "./components/MyColaItemList.js";
import MyMoneyBtn from "./components/MyMoneyBtn.js";
import DepositForm from "./components/CreditForm.js";

const $contList = document.querySelector(".cont-lists");
const $cartList = document.querySelector(".list-cart");
const $contMyColaList = document.querySelector(".cont-myColaList");
const $contMyMoney = document.querySelector(".cont-mymoney");
const $contCredit = document.querySelector(".cont-credit");

new ColaItems($contList);
new CartList($cartList);
new MyColaItemList($contMyColaList);
new MyMoneyBtn($contMyMoney);
new DepositForm($contCredit);