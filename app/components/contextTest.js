import React, { useState } from "react";
import ValueProvider from './ValueContext';
import {Text} from 'react-native'

const Context = () => {
  const data = {name:0, count:0, log:[]}

  return (
    <ValueProvider value={data}>
        <Text>{JSON.stringify(data)}</Text>
     </ValueProvider>
  )
}

export default Context;
