import React,{useState} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useValue } from './ValueContext';
import NamedCounterWithContext from './namedCounterWithContext'

const NamedCounter = ({label,value,updateTotal,updateCoins}) => {
    
    const {currentValue} = useValue();


    return (
        <View style={styles.container}>
            <Text>{currentValue.count} coins</Text>
            <Text>The counter value is {currentValue.total} </Text>
            <Text> {JSON.stringify(currentValue.log)} </Text>
            <NamedCounterWithContext label="penny" value={1}></NamedCounterWithContext>
            <NamedCounterWithContext label="nickel" value={5}></NamedCounterWithContext>
            <NamedCounterWithContext label="dime" value={10}></NamedCounterWithContext>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    padding: 8, 
  },
 
});
export default NamedCounter;