import { useCallback } from 'react';
import { UseDebounce } from '../index.d';

/**
 * 函数防抖
 * @param callback {*} 回调函数
 * @param delay {*} 延迟 ms
 * @param callbackStart {*} 是否首次执行回调
 */
const useDebounce: UseDebounce = (
  callback,
  delay = 16
  // callbackStart = true
) => {
  // TODO: 区分开两种逻辑
  // let _callbackStart = callbackStart; // 是否首次执行回调
  let timer: NodeJS.Timeout;
  let lastTime: number = 0;

  const runCallback = (...args: any) => {
    // if (_callbackStart) {
    //   _callbackStart = false;
    //   callback.apply(null, args);
    //   return;
    // }
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(null, args);
      // if (callbackStart) _callbackStart = true;
    }, delay);
  };

  return useCallback((...args) => {
    const thisTime = new Date().getTime();
    if (thisTime - lastTime > delay && lastTime !== 0) {
      lastTime = 0;
    } else {
      lastTime = thisTime;
    }
    runCallback(...args);
  }, []);
};

export default useDebounce;
