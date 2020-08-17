# zr-hooks

> 建议使用 [react-use](https://github.com/streamich/react-use)，功能强大，封装了很多的自定义Hook

React 自定义 Hooks

[English](./README.md) | 中文


## 依赖
React: 16.8+


## 下载
```
npm i zr-hooks
```


## 用法

### Hooks

#### useDebounce

#### useFetchData
```
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
```

#### usePrevState
#### useScroll
#### useThrottle
#### useWindowClick

## 使用
组件：[list](./example/pages/list.tsx)
