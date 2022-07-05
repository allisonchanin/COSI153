import React from "react";
import Axios from 'axios';

import ValueProvider from './asyncValueContext';
import AsyncDemo from './asyncDemo';


const App = () => {
  const url = "";

  const sendFeedback= (text) => {console.log('sending feedback' + text)}
  
  const getFeedback=() => {console.log('getting feedback'); return(['f1','f2'])}
  let data = {name:"", age:0, weight:0, height:0, sendFeedback, getFeedback};

  return (
    <ValueProvider value={data} tag='@exam5'>
        <AsyncDemo />
    </ValueProvider>
  )
}

export default App;