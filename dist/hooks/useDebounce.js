import { useCallback } from 'react';
/**
 * 函数防抖
 * @param callback {*} 回调函数
 * @param delay {*} 延迟 ms
 * @param callbackStart {*} 是否首次执行回调
 */
const useDebounce = (callback, delay = 16, callbackStart = true) => {
    let _callbackStart = callbackStart; // 是否首次执行回调
    let timer;
    let lastTime = 0;
    const runCallback = (...args) => {
        if (_callbackStart) {
            _callbackStart = false;
            callback.apply(null, args);
        }
        if (timer)
            clearTimeout(timer);
        timer = setTimeout(() => {
            callback.apply(null, args);
            _callbackStart = true;
        }, delay);
    };
    return useCallback(function (...args) {
        const thisTime = new Date().getTime();
        if (thisTime - lastTime > delay && lastTime !== 0) {
            lastTime = 0;
        }
        else {
            lastTime = thisTime;
        }
        runCallback(...args);
    }, []);
};
export default useDebounce;
