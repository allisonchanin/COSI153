import React from 'react';
import {View,Text,TextInput} from 'react-native';
import {useValue} from './asyncValueContext';

const Async2 = () => {
    const {currentValue} = useValue();
    return (
        <View>
            <Text> Age Calculator </Text>
            <Text> age in years: {currentValue.age} </Text>
            <Text> age in weeks: {currentValue.age*52} </Text>
            <Text> age in days: {currentValue.age*365} </Text>
        </View>
    )
}

export default Async2;