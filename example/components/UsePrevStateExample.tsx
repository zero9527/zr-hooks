import React, { useState } from 'react';
import { usePrevState } from 'zr-hooks';

const UsePrevStateExample: React.FC = () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrevState(count);

  return (
    <div>
      <h1>usePrevState</h1>
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
