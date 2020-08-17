(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{10:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),i=t(8);n.default=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"useWindowClick"),o.a.createElement(i.a,null,"import React, { useEffect, useState, useRef } from 'react';\nimport { useWindowClick } from 'zr-hooks';\n\nconst codeStyle: Record<string, string> = {\n  width: '100%',\n  maxWidth: '600px',\n  display: 'inline-block',\n  padding: '10px 20px',\n  textAlign: 'left',\n  fontFamily: 'Consolas',\n  fontSize: '12px',\n  overflowX: 'auto',\n};\n\nconst PreCode: React.FC = (props) => {\n  const preRef = useRef(null);\n  const [visible, setVisible] = useState(false);\n\n  useEffect(() => {\n    if (visible) {\n      // script引入\n      hljs.highlightBlock(preRef.current);\n    }\n  }, [visible]);\n\n  useEffect(() => {\n    return () => {\n      removeListener();\n    };\n  }, []);\n\n  useEffect(() => {\n    if (visible) addListener();\n    else removeListener();\n  }, [visible]);\n\n  const onWindowClick = () => {\n    console.log('onWindowClick');\n    setVisible(false);\n  };\n  const { addListener, removeListener } = useWindowClick(onWindowClick);\n\n  return (\n    <div>\n      <button onClick={() => setVisible(true)}>\n        {visible ? '隐藏代码' : '显示代码'}\n      </button>\n      {visible && (\n        <pre ref={preRef} onClick={(e) => e.stopPropagation()}>\n          <p>取消冒泡后，点这里不会收起</p>\n          <code className=\"js\" style={codeStyle}>\n            {props.children}\n          </code>\n        </pre>\n      )}\n    </div>\n  );\n};\n\nexport default PreCode;\n"))}},7:function(e,n,t){"use strict";t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return i})),t.d(n,"d",(function(){return c})),t.d(n,"b",(function(){return l}));var r=t(0);var o=e=>{const[n,t]=Object(r.useState)(e),o=Object(r.useRef)();return Object(r.useEffect)(()=>{o.current=n,t(e)},[e]),o.current};var i=(e,n=16,t=!0)=>{let o,i=t,c=0;return Object(r.useCallback)((function(...t){const r=(new Date).getTime();c=r-c>n&&0!==c?0:r,((...t)=>{i&&(i=!1,e.apply(null,t)),o&&clearTimeout(o),o=setTimeout(()=>{e.apply(null,t),i=!0},n)})(...t)}),[])};var c=e=>{const n=Object(r.useRef)(!1);Object(r.useEffect)(()=>()=>{window.removeEventListener("click",o,!1)},[]);const t=()=>{n.current=!1,window.removeEventListener("click",o,!1)},o=()=>{if("function"!=typeof e)return console.warn("callback 不是函数！");e&&n&&(e(),t())};return{addListener:()=>{n.current=!0,window.addEventListener("click",o,!1)},removeListener:t}},u=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function c(e){try{l(r.next(e))}catch(e){i(e)}}function u(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,u)}l((r=r.apply(e,n||[])).next())}))};var l=function({fetchFn:e,expectResponse:n,isReady:t,deps:o=[]}){let i=!1;const[c,l]=Object(r.useState)(!1),[s,a]=Object(r.useState)(!1),[f,d]=Object(r.useState)();Object(r.useEffect)(()=>(void 0===t||t?p():a(!1),()=>{a(!1),i=!0}),o);const p=()=>u(this,void 0,void 0,(function*(){try{a(!0);const t=yield e();i||(a(!1),n(t)?d(t):l(!0))}catch(e){console.error(e),i||l(!0)}}));return{isError:c,isLoading:s,resData:f,fetchData:p}}},8:function(e,n,t){"use strict";var r=t(0),o=t.n(r),i=t(7);function c(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],r=!0,o=!1,i=void 0;try{for(var c,u=e[Symbol.iterator]();!(r=(c=u.next()).done)&&(t.push(c.value),!n||t.length!==n);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return t}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return u(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return u(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var l={width:"100%",maxWidth:"600px",display:"inline-block",padding:"10px 20px",textAlign:"left",fontFamily:"Consolas",fontSize:"12px",overflowX:"auto"};n.a=function(e){var n=Object(r.useRef)(null),t=c(Object(r.useState)(!1),2),u=t[0],s=t[1];Object(r.useEffect)((function(){u&&hljs.highlightBlock(n.current)}),[u]),Object(r.useEffect)((function(){return function(){d()}}),[]),Object(r.useEffect)((function(){u?f():d()}),[u]);var a=Object(i.d)((function(){console.log("onWindowClick"),s(!1)})),f=a.addListener,d=a.removeListener;return o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){return s(!0)}},u?"隐藏代码":"显示代码"),u&&o.a.createElement("pre",{ref:n,onClick:function(e){return e.stopPropagation()}},o.a.createElement("p",null,"取消冒泡后，点这里不会收起"),o.a.createElement("code",{className:"js",style:l},e.children)))}}}]);