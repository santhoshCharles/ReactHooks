import logo from './logo.svg';
import './App.css';
import CoustomHooks from './CoustomHooks';
import Child from './Child';
import React, { useState, useCallback, useMemo, useRef, useEffect, useLayoutEffect, useDebugValue } from 'react';
import Title from './Title';
import Count from './Count';
import Button from './Button';

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

export const ThemeContext = React.createContext(themes.light);

// const App = () => {
//   const { loading, data } = CoustomHooks('https://jsonplaceholder.typicode.com/users')
//   const [age, setAge] = useState(0);
//   const [salary, setSalary] = useState(0);
//   const inputRef = useRef(null);
//   const countRef = useRef(null);
//   const [showLayoutEffect, setShowLayoutEffect] = useState(false);
//   const layoutEffPopup = useRef();
//   const popup = useRef();

//   useEffect(() => {
//     console.log(layoutEffPopup)
//     //inputRef.current.focus();
//     if (layoutEffPopup.current == null && popup == null) return;
//     console.log(layoutEffPopup.current.getBoundingClientRect().y);

//     const { bottom } = layoutEffPopup.current.getBoundingClientRect();
//     console.log('popup', bottom);
//   }, [])

//   const onClickAge = useCallback(() => {
//     setAge(age + 1);
//     countRef.current.consoleFun();
//   }, [age])
  
//   const onClickSalary = useCallback(() => {
//     setSalary(salary + 1);
//   }, [salary])

//   const isEven = useMemo(() => {
//     let i = 0
//     while (i < 2000000000) i++
//     return age % 2 === 0 ? "Even" : "odd"
//   }, [age])


//   if (loading) return <h1>Loading</h1>

//   return <div>
//     <h1>Data fetched successfully.</h1>
//     {/* { JSON.stringify(data) } */ }
//     <ThemeContext.Provider value={ themes.dark }>
//       <Child />
//     </ThemeContext.Provider>
//     <Title />
//     <Count ref={ countRef } count={ age } name={ 'Age' } /><span>{ isEven }</span>
//     <Button name={ 'Age' } onClick={ onClickAge } />
//     <Count count={ salary } name={ "salary" } />
//     <Button ref={ layoutEffPopup } name={ 'salary' } onClick={ onClickSalary } />
//     <input ref={ inputRef } type="text" />
//     <div style={ { position: "absolute" } } ref={ popup } >show layout effect</div>

//   </div>
// };
// export default App;

export default function App() {
  const [show, setShow] = useState(false)
  const popup = useRef()
  const button = useRef()
  useLayoutEffect(() => {
  if (popup.current == null || button.current == null) return
  const { bottom } = button.current.getBoundingClientRect()
  popup.current.style.top = `${bottom + 25}px`
  }, [show])
  useDebugValue('hiii')
  return(
    <>
  <button ref={button} onClick={() => setShow(prev => !prev)}>
  Click Here
  </button>
  {show && (
  <div style={{ position: "absolute" }} ref={popup}>
  This is a popup
  </div>
  )}
  </>
  )
  }
  
