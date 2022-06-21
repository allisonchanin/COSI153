import React, { useState } from 'react';
import { Text, TextInput, View, Button } from 'react-native';

const BMI = () => {
  const [weight, setWeight] = useState(150);
  const [height, setHeight] = useState(68);
  const [bmi, setBMI] = useState(0);
  
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Enter your weight in pounds"
        onChangeText={newText => setWeight(parseFloat(newText))}
        defaultValue={weight}
      />
       <TextInput
        style={{height: 40}}
        placeholder="Enter your height in inches"
        onChangeText={newText => setHeight(parseFloat(newText))}
        defaultValue={height}
      />
      <Button
        color = '#FAD4D4'
        title='calculate BMI'
        onPress = {() => {
          setBMI(weight/(height*height)*703)
      }}
      />

      <Text style={{padding: 10, fontSize: 30}}>
        Your height is {height} inches and your weight is {weight} pounds.
        Your bmi is {bmi}.
      </Text>
    </View>
  );
}

export default BMI;