import { useEffect, useRef } from 'react';
/**
 * 添加全局点击事件，底层元素阻止冒泡则不会触发
 * @param callback
 */
const useWindowClick = (callback) => {
    const isReady = useRef(false);
    useEffect(() => {
        return () => {
            window.removeEventListener('click', onWindowClick, false);
        };
    }, []);
    const addListener = () => {
        isReady.current = true;
        window.addEventListener('click', onWindowClick, false);
    };
    const removeListener = () => {
        isReady.current = false;
        window.removeEventListener('click', onWindowClick, false);
    };
    const onWindowClick = () => {
        if (typeof callback !== 'function') {
            return console.warn('callback 不是函数！');
        }
        if (callback && isReady) {
            callback();
            removeListener();
        }
    };
    return {
        addListener,
        removeListener,
    };
};
export default useWindowClick;
