var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useState, useEffect } from 'react';
/**
 * 自定义 Hook: 获取数据
 * @param fetchFn {*} 使用axios等封装的某个接口请求函数
 * @param expectResponse {*} 回调函数参数res是接口返回的数据，回调函数返回期望的结果，如 `res.code === 0`
 * @param isReady {*} 可以获取数据标志，默认直接获取数据
 * @param deps {*} 更新依赖，重新执行获取数据
 *
 * @returns {*} {}.isError: 接口返回非期望结果，或其他报错
 * @returns {*} {}.isLoading: 是否正在请求
 * @returns {*} {}.resData: 请求返回的数据
 * @returns {*} {}.fetchData: 请求函数，供外部调用手动请求数据
 */
function useFetchData({ fetchFn, expectResponse, isReady, deps = [], }) {
    let isDestroyed = false;
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [resData, setResData] = useState();
    useEffect(() => {
        // 默认(undefined)直接获取数据
        // 有条件时 isReady === true 再获取
        if (isReady === undefined || isReady) {
            fetchData();
        }
        else {
            setIsLoading(false);
        }
        return () => {
            setIsLoading(false);
            isDestroyed = true;
        };
    }, deps);
    const fetchData = () => __awaiter(this, void 0, void 0, function* () {
        try {
            setIsLoading(true);
            const res = yield fetchFn();
            if (!isDestroyed) {
                setIsLoading(false);
                if (expectResponse(res)) {
                    setResData(res);
                }
                else {
                    setIsError(true);
                }
            }
        }
        catch (err) {
            console.error(err);
            if (!isDestroyed)
                setIsError(true);
        }
    });
    return {
        isError,
        isLoading,
        resData,
        fetchData,
    };
}
export default useFetchData;
