import React, { useEffect, useState, useRef } from 'react';
import { useWindowClick } from 'zr-hooks';

const codeStyle: Record<string, string> = {
  display: 'inline-block',
  padding: '10px 20px',
  textAlign: 'left',
  fontFamily: 'Consolas',
  fontSize: '12px',
  overflowX: 'auto',
};

const PreCode: React.FC = (props) => {
  const preRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) {
      // script引入
      (window as any).hljs.highlightBlock(preRef.current);
    }
  }, [visible]);

  useEffect(() => {
    return () => {
      removeListener();
    };
  }, []);

  useEffect(() => {
    if (visible) addListener();
    else removeListener();
  }, [visible]);

  const onWindowClick = () => {
    console.log('onWindowClick');
    setVisible(false);
  };
  const { addListener, removeListener } = useWindowClick(onWindowClick);

  return (
    <>
      <button onClick={() => setVisible(true)}>
        {visible ? '隐藏代码' : '显示代码'}
      </button>
      {visible && (
        <pre ref={preRef} onClick={(e) => e.stopPropagation()}>
          <p>取消冒泡后，点这里不会收起</p>
          <code className="js" style={codeStyle}>
            {props.children}
          </code>
        </pre>
      )}
    </>
  );
};

export default PreCode;
