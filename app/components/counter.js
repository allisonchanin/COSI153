import React,{useState} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const Counter = () => {
    const [count,setCount] = useState(0);
    return (
        <View style={styles.container}>
        <Text>The counter value is {count} </Text>
        <Button 
            color = '#FAD4D4'
            title="+" 
            onPress = {() => setCount(count+1)}
            />
        <Button
            color = '#FAD4D4'
            title="-" 
            onPress = {() => setCount(count-1)}
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
export default Counter;