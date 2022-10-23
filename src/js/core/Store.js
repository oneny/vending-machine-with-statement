import { observable } from "./observer.js";

export const createStore = (reducer) => {
  // reducer가 실행될 때 반환하는 객체(state)를 observable로 만들어야 한다.
  const state = observable(reducer());

  // getState가 실제 state를 반환하는 것이 아니라 frozenState를 반환하도록
  const frozenState = {};
  Object.keys(state).forEach(key => {

    // set 접근자 프로퍼티는 작성하지 X, 직접적으로 접근하지 못하게 막기, 
    Object.defineProperty(frozenState, key, {
      get: () => state[key]
    });
  });

  // disptach로만 state의 값에 접근하여 변경할 수 있도록 한다.
  const dispatch = (action) => {
    const newState = reducer(state, action);

    for (const [key, value] of Object.entries(newState)) {
      // state의 key가 아닌 경우 변경 생략, 0인 경우도 걸리지므로 조건 추가
      if (!state[key] && state[key] !== 0) continue;
      state[key] = value;
    }
  }

  // 값을 반환받을 수 있는(get) 접근자 프로퍼티만 있는 객체 반환
  const getState = () => frozenState;

  return { getState, dispatch };
}