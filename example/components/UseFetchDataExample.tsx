import React, { useEffect, useState } from 'react';
import { useFetchData, useDebounce } from 'zr-hooks';
import PreCode from './PreCode';

const codeStr = `
type ResType = {
  code: number;
  data: string[];
  msg: string;
};

const UseFetchDataExample: React.FC = () => {
  const [dataList, setDataList] = useState<any[] | undefined>();
  const { isError, isLoading, resData, fetchData } = useFetchData<ResType>({
    fetchFn: () => getData(),
    expectResponse: (res) => res.code === 0,
  });

  useEffect(() => {
    if (Array.isArray(resData?.data)) {
      setDataList(resData!.data);
    }
  }, [resData]);

  const getData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          code: 0,
          data: ['小明', '小红', '铁蛋', '富贵'],
          msg: 'ok',
        });
      }, 300);
    });
  };

  const onFetch = () => {
    setDataList([]);
    fetchData();
  };

  return (
    <div>
      <div className="subtitle">
        <span className="h2">useFetchData</span>
        <PreCode>{codeStr}</PreCode>
      </div>
      <button onClick={onFetch}>fetchData</button>
      <div>
        <p>{isError ? 'error' : ''}</p>
        <p>{isLoading ? 'fetching...' : ''}</p>
        {Array.isArray(dataList) &&
          dataList.map((item: any) => <p key={item}>{item}</p>)}
      </div>
    </div>
  );
};

export default UseFetchDataExample;
`;

type ResType = {
  code: number;
  data: string[];
  msg: string;
};

type SearchType = {
  age: string;
  name: string;
};

const UseFetchDataExample: React.FC = () => {
  const [searchParams, setSearchParams] = useState<SearchType>({
    age: undefined,
    name: undefined,
  });
  const [dataList, setDataList] = useState<any[] | undefined>();
  const { isError, isLoading, resData, fetchData } = useFetchData<ResType>({
    fetchFn: () => getData(),
    expectResponse: (res) => res.code === 0,
    deps: [searchParams],
  });

  useEffect(() => {
    setDataList([]);
  }, [searchParams]);

  useEffect(() => {
    if (Array.isArray(resData?.data)) {
      setDataList(resData!.data);
    }
  }, [resData]);

  const getData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          code: 0,
          data: ['小明', '小红', '铁蛋', '富贵'],
          msg: 'ok',
        });
      }, 30);
    });
  };

  const onChange = useDebounce(
    (type: keyof SearchType, e: React.ChangeEvent<HTMLInputElement>) => {
      e.persist();
      if (!e.target) return;
      console.log(e);
      setSearchParams((prev) => {
        return { ...prev, [type]: e.target.value };
      });
    },
    1000
  );

  const onFetch = () => {
    setDataList([]);
    fetchData();
  };

  return (
    <div>
      <div className="subtitle">
        <span className="h2">useFetchData</span>
        <PreCode>{codeStr}</PreCode>
      </div>
      <input
        type="text"
        placeholder="年龄"
        onChange={(e) => onChange('age', e)}
      />
      <input
        type="text"
        placeholder="姓名"
        onChange={(e) => onChange('name', e)}
      />
      <button onClick={onFetch}>fetchData</button>
      <div>
        <p>{isError ? 'error' : ''}</p>
        <p>{isLoading ? 'fetching...' : ''}</p>
        {Array.isArray(dataList) &&
          dataList.map((item: any) => <p key={item}>{item}</p>)}
      </div>
    </div>
  );
};

export default UseFetchDataExample;
