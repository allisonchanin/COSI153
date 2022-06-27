import React, { useState } from "react";
import ValueProvider from './ValueContext';
import CounterDemoWithContext from './counterDemoWithContext'

const Context = () => {
  const data = {name:0, count:0, log:[]}

  return (
    <ValueProvider value={data}>
        <CounterDemoWithContext />
    </ValueProvider>
  )
}

export default Context;
