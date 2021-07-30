import React, { useRef, useEffect } from 'react'

import './App.css';
import Child from './components/child'

function Parent() {
  const childRef = useRef(null);

  const handleColor = color => {
    childRef.current.style.color = color;
  }

  // returns null
  console.log(childRef.current)

  useEffect(() => {
    // returns the p-tag
    console.log(childRef.current, 'parent.js')
  }, [])

  return (
    <>
      {/** 
     * // 1 -> Tree shaking in the child component
      <Child title="Passing Refs" />
      */}
      <Child handleColor={handleColor} forwardedRef={childRef} title="Passing Refs" />
    </>
  );
}

export default Parent;
