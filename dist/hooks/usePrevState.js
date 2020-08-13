import { useRef, useEffect, useState } from 'react';
/**
 * usePrevState: 获取上一次state
 * @param state
 * @example
 * const [scrollTop, setScrollTop] = useState(0);
  const prevScrollTop = usePrevState(scrollTop);
 */
const usePrevState = (state) => {
    const [newState, setNewState] = useState(state);
    const prevState = useRef();
    useEffect(() => {
        prevState.current = newState;
        setNewState(state);
    }, [state]);
    return prevState.current;
};
export default usePrevState;
