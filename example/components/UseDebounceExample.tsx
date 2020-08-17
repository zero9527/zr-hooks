import React, { useState } from 'react';
import { useDebounce } from 'zr-hooks';
import PreCode from './PreCode';

const codeStr = `const UseDebounceExample: React.FC = () => {
  const [count, setCount] = useState(0);

  const onClick = useDebounce(() => {
    setCount((prev) => prev + 1);
  }, 1000);

  return (
    <div>
      <div className="subtitle">
        <span className="h2">useDebounce</span>
        <PreCode>{codeStr}</PreCode>
      </div>
      <p>count: {count}</p>
      <p>
        <button onClick={onClick}>onClick</button>
      </p>
    </div>
  );
};

export default UseDebounceExample;`;

const UseDebounceExample: React.FC = () => {
  const [count, setCount] = useState(0);

  const onClick = useDebounce(() => {
    setCount((prev) => prev + 1);
  }, 1000);

  return (
    <div>
      <div className="subtitle">
        <span className="h2">useDebounce</span>
        <PreCode>{codeStr}</PreCode>
      </div>
      <p>count: {count}</p>
      <p>
        <button onClick={onClick}>onClick</button>
      </p>
    </div>
  );
};

export default UseDebounceExample;
