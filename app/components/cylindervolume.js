import React, { useState } from 'react';
import { Text, TextInput, View, Button} from 'react-native';

const Cylinder = () => {
  const [radius, setRadius] = useState(10);
  const [height, setHeight] = useState(68);
  const [volume, setVolume] = useState(0);
  
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Enter the radius of the cylinder"
        onChangeText={newText => setRadius(parseFloat(newText))}
        defaultValue={radius}
      />
       <TextInput
        style={{height: 40}}
        placeholder="Enter the height of the cylinder"
        onChangeText={newText => setHeight(parseFloat(newText))}
        defaultValue={height}
      />
      <Button
        color = '#FAD4D4'
        title='calculate volume'
        onPress = {() => {
          setVolume(height*Math.PI*(radius*radius))
      }}
      />
      <Text style={{padding: 10, fontSize: 30}}>
        The volume of the cylinder is {volume}.
      </Text>

    </View>
  );
}

export default Cylinder;