import React, { useEffect, useState } from 'react';
// npm link local
import { useFetchData } from 'zr-hooks';

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
      <h1>useFetchData</h1>
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
