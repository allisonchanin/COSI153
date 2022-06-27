import React,{useState} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useValue } from './ValueContext';


const NamedCounterWithContext = ({label,value}) => {
    const {currentValue,setCurrentValue} = useValue();

    return (
        <View style={styles.container}>
            <Button 
                color = '#FAD4D4'
                title={label} 
                onPress = {() => {
                  setCurrentValue(
                    {total:currentValue.total+{value},
                     count:currentValue.count+1,
                     log:currentValue.log.concat([value]) })
                }}
                />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 8, 
  },
 
});
export default NamedCounterWithContext;