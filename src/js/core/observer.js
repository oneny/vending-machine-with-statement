let currentObserver = null;

export const observe = (fn) => {
  currentObserver = fn;
  fn();
  currentObserver = null;
};

export const observable = (obj) => {
  Object.keys(obj).forEach((key) => {
    let _value = obj[key];
    const observers = new Set();

    Object.defineProperty(obj, key, {
      get() {
        if (currentObserver) observers.add(currentObserver);
        return _value;
      },
      set(value) {
        // 숫자, 문자열, null, undefined 등의 원시 타입 상태가 같은 경우 방지
        if (_value === value) return;
        // 객체, 배열 똑같은 상태인 경우 방지
        if (JSON.stringify(_value) === JSON.stringify(value)) return;
        
        // 상태 바뀌면 저장 후 observers에 저장된 함수 실행
        _value = value;
        observers.forEach((fn) => fn());
      },
    });
  });

  return obj;
};
