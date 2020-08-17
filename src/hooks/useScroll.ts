import { useState, useEffect } from 'react';
import usePrevState from './usePrevState';
import { UseScrollReturns } from '../index.d';

/**
 * 监听window滚动
 * @returns {*} [prevScrollTop, scrollTop];
 * @example
 * const [prevScrollTop, scrollTop] = useScroll()
 */
function useScroll(): UseScrollReturns {
  const [scrollTop, setScrollTop] = useState(0);
  const prevScrollTop = usePrevState(scrollTop);

  useEffect(() => {
    listenerHandler('add');

    return () => {
      listenerHandler('remove');
    };
  }, []);

  const listenerHandler = (type: 'add' | 'remove') => {
    window[`${type}EventListener`]('scroll', onScroll, true);
  };

  const onScroll = () => {
    const _scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;
    setScrollTop(_scrollTop);
  };

  return [prevScrollTop, scrollTop];
}

export default useScroll;
