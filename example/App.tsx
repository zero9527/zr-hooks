import React, { Suspense, lazy } from 'react';
import './styles.css';

const UsePrevStateExample = lazy(() =>
  import('./components/UsePrevStateExample')
);
const UseWindowClickExample = lazy(() =>
  import('./components/UseWindowClickExample')
);
const UseDebounceExample = lazy(() =>
  import('./components/UseDebounceExample')
);
const UseFetchDataExample = lazy(() =>
  import('./components/UseFetchDataExample')
);

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>zr-hooks example</h1>
      <div>
        <Suspense fallback="loading UsePrevStateExample">
          <UsePrevStateExample />
        </Suspense>
      </div>
      <div>
        <Suspense fallback="loading UseWindowClickExample">
          <UseWindowClickExample />
        </Suspense>
      </div>
      <div>
        <Suspense fallback="loading UseDebounceExample">
          <UseDebounceExample />
        </Suspense>
      </div>
      <div>
        <Suspense fallback="loading UseFetchDataExample">
          <UseFetchDataExample />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
