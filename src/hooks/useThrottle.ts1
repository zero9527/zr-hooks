import { useCallback } from 'react';
import { UseThrottle } from '../index.d';

/**
 * 函数节流
 * @param callback {*} 回调函数
 * @param delay {*} 延迟 ms
 */
const useThrottle: UseThrottle = (callback, delay: number = 16) => {
  let lastTime: number = 0;
  let canCallback = true;

  const restore = (time: number) => {
    lastTime = time;
    canCallback = false;
  };

  const runCallback = (...args: any) => {
    callback.apply(null, args);
  };

  return useCallback((args?: any) => {
    const thisTime = new Date().getTime();
    if (canCallback && thisTime - lastTime > delay) {
      restore(thisTime);
      runCallback.apply(null, args);
      setTimeout(() => {
        canCallback = true;
      }, delay);
      return;
    }
  }, []);
};

export default useThrottle;
