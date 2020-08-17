/// <reference types="react" />

import { Dispatch, SetStateAction } from 'react';

export = ZrHooks;
export as namespace ZrHooks;

declare namespace ZrHooks {
  // =================
  //  usePrevState.ts
  // =================
  type UsePrevState<S = any> = (state: S) => S | undefined;
  /**
   * usePrevState: 获取上一次state
   * @param state 
   * @example 
   * const [scrollTop, setScrollTop] = useState(0);
    const prevScrollTop = usePrevState(scrollTop);
   */
  function usePrevState<S>(state: S): UsePrevState<S>;

  // =================
  //  useScroll.ts
  // =================
  type UseScrollReturns = [number, number];
  /**
   * 监听window滚动
   * @returns {*} [prevScrollTop, scrollTop];
   * @example
   * const [prevScrollTop, scrollTop] = useScroll()
   */
  function useScroll(): UseScrollReturns;

  // =================
  //  useWindowClick.ts
  // =================
  type UseWindowClick = (
    callback: () => void
  ) => {
    addListener: () => void;
    removeListener: () => void;
  };
  /**
   * 添加全局点击事件，底层元素阻止冒泡则不会触发
   * @param callback
   */
  const useWindowClick: UseWindowClick;

  // =================
  //  useDebounce.ts
  // =================
  type UseDebounce = (
    callback: (...params: any) => void,
    delay?: number,
    callbackStart?: boolean
  ) => (...args: any) => void;
  /**
   * 函数防抖
   * @param callback {*} 回调函数
   * @param delay {*} 延迟 ms
   * @param callbackStart {*} 是否首次执行回调
   */
  const useDebounce: UseDebounce;

  // =================
  //  useThrottle.ts
  // =================
  type UseThrottle<S = any> = (
    callback: (...params: any) => void,
    delay: number,
    deps: S
  ) => () => void;
  /**
   * 函数节流
   * @param callback {*} 回调函数
   * @param delay {*} 延迟 ms
   */
  const useThrottle: UseThrottle;

  // =================
  //  useFetchData.ts
  // =================
  type UseFetchDataProps<ResType = any> = {
    fetchFn: () => Promise<any>;
    expectResponse: (res: ResType) => boolean;
    isReady?: boolean;
    deps?: any[];
  };

  type UseFetchDataReturns<ResType = any> = {
    isError?: boolean;
    isLoading?: boolean;
    resData?: ResType;
    fetchData: () => void;
  };

  /**
   * 自定义 Hook: 获取数据
   * @param fetchFn {*} 使用axios等封装的某个接口请求函数
   * @param expectResponse {*} 回调函数参数res是接口返回的数据，回调函数返回期望的结果，如 `res.code === 0`
   * @param isReady {*} 一次有效，可以获取数据标志，默认直接获取数据
   * @param deps {*} 更新依赖，重新执行获取数据
   *
   * @returns {*} {}.isError: 接口返回非期望结果，或其他报错
   * @returns {*} {}.isLoading: 是否正在请求
   * @returns {*} {}.resData: 请求返回的数据
   * @returns {*} {}.fetchData: 请求函数，供外部调用手动请求数据
   */
  function useFetchData<ResType = any>(
    props: UseFetchDataProps<ResType>
  ): UseFetchDataReturns<ResType>;
}
