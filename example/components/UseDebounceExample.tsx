import React, { useState } from 'react';
import { useDebounce } from 'zr-hooks';

const UseDebounceExample: React.FC = () => {
  const [count, setCount] = useState(0);

  const onClick = useDebounce(() => {
    setCount((prev) => prev + 1);
  }, 1000);

  return (
    <div>
      <h1>useDebounce</h1>
      <p>count: {count}</p>
      <p>
        <button onClick={onClick}>onClick</button>
      </p>
    </div>
  );
};

export default UseDebounceExample;
