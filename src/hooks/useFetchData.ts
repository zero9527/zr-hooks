import { useState, useEffect } from 'react';
import { UseFetchDataProps, UseFetchDataReturns } from '../index.d';

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
function useFetchData<ResType = any>({
  fetchFn,
  expectResponse,
  isReady,
  deps = [],
}: UseFetchDataProps<ResType>): UseFetchDataReturns<ResType> {
  let isDestroyed = false;
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [resData, setResData] = useState<ResType | undefined>();

  useEffect(() => {
    // 默认(undefined)直接获取数据
    // 有条件时 isReady === true 再获取
    if (isReady === undefined || isReady) {
      fetchData();
    } else {
      setIsLoading(false);
    }

    return () => {
      setIsLoading(false);
      isDestroyed = true;
    };
  }, deps);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res: ResType = await fetchFn();
      if (!isDestroyed) {
        setIsLoading(false);
        if (expectResponse(res)) {
          setResData(res);
        } else {
          setIsError(true);
        }
      }
    } catch (err) {
      console.error(err);
      if (!isDestroyed) setIsError(true);
    }
  };

  return {
    isError,
    isLoading,
    resData,
    fetchData,
  };
}

export default useFetchData;
