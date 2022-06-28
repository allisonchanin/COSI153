import React from "react";


import ValueProvider from './asyncValueContext';
import AsyncDemo from './asyncDemo';

const App = () => {
  const data = {name:"", age:0, weight:0, height:0};

  return (
    <ValueProvider value={data}>
        <AsyncDemo />
    </ValueProvider>
  )
}

export default App;