import React from 'react';
import {View,Text,TextInput} from 'react-native';
import {useValue} from './asyncValueContext';

const Async3 = () => {
    const {currentValue} = useValue();
    
    return (
        <View>
            <Text> BMI calculator</Text>
            <Text> height: {currentValue.height} </Text>
            <Text> weight: {currentValue.weight} </Text>
            <Text> bmi: {currentValue.weight/(currentValue.height*currentValue.height)*703} </Text>
           
        </View>
    )
}

export default Async3;