import React, { useState } from 'react';
import { usePrevState } from 'zr-hooks';
import PreCode from './PreCode';

const codeStr = `
const UsePrevStateExample: React.FC = () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrevState(count);

  return (
    <div>
      <div className="subtitle">
        <span className="h2">usePrevState</span>
        <PreCode>{codeStr}</PreCode>
      </div>
      <p>count: {count}</p>
      <p>prevCount: {prevCount}</p>
      <p>
        <button onClick={() => setCount((prev) => prev + 1)}>count++</button>
        &emsp;
        <button onClick={() => setCount((prev) => prev - 1)}>count--</button>
      </p>
    </div>
  );
};

export default UsePrevStateExample;
`;

const UsePrevStateExample: React.FC = () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrevState(count);

  return (
    <div>
      <div className="subtitle">
        <span className="h2">usePrevState</span>
        <PreCode>{codeStr}</PreCode>
      </div>
      <p>count: {count}</p>
      <p>prevCount: {prevCount}</p>
      <p>
        <button onClick={() => setCount((prev) => prev + 1)}>count++</button>
        &emsp;
        <button onClick={() => setCount((prev) => prev - 1)}>count--</button>
      </p>
    </div>
  );
};

export default UsePrevStateExample;
