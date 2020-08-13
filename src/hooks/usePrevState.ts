import { useRef, useEffect, useState } from 'react';
import { UsePrevState } from '../index.d';

/**
 * usePrevState: 获取上一次state
 * @param state 
 * @example 
 * const [scrollTop, setScrollTop] = useState(0);
  const prevScrollTop = usePrevState(scrollTop);
 */
const usePrevState: UsePrevState = <S = any>(state: S) => {
  const [newState, setNewState] = useState<S>(state);
  const prevState = useRef<S | undefined>();

  useEffect(() => {
    prevState.current = newState;
    setNewState(state);
  }, [state]);

  return prevState.current;
};

export default usePrevState;
