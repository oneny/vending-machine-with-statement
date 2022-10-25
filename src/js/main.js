import ColaItems from "./components/ColaItems.js";
import CartList from "./components/CartList.js";
import MyColaItemList from "./components/myColaItemList.js";
import MyMoneyBtn from "./components/MyMoneyBtn.js";

const $contList = document.querySelector(".cont-lists");
const $cartList = document.querySelector(".list-cart");
const $contMyColaList = document.querySelector(".cont-myColaList");
const $contMyMoney = document.querySelector(".cont-mymoney");

new ColaItems($contList);
new CartList($cartList);
new MyColaItemList($contMyColaList);
new MyMoneyBtn($contMyMoney);