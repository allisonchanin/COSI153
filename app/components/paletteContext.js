import React, { useState } from "react";
import ValueProvider from './ValueContext';
import Palette from './palette'

const Context = () => {
  const data = {log:[]}

  return (
    <ValueProvider value={data}>
        <Palette />
    </ValueProvider>
  )
}

export default Context;
