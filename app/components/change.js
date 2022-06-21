import React,{useState} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const Change = () => {
    const [count,setCount] = useState(0);
    return (
        <View style={styles.container}>
        <Text>The counter value is {count} </Text>
            <View style={styles.buttons}>    
            <Button
                color = '#FAD4D4'
                title="Penny" 
                onPress = {() => setCount(count+1)}
                />
            <Button
                color = '#FAD4D4'
                title="Nickel" 
                onPress = {() => setCount(count+5)}
                />
            <Button 
                color = '#FAD4D4'
                title="Dime" 
                onPress = {() => setCount(count+10)}
                />
            <Button
                color = '#FAD4D4'
                title="Quarter" 
                onPress = {() => setCount(count+25)}
                />
            <Button 
                color = '#FAD4D4'
                title="Half-Dollar" 
                onPress = {() => setCount(count+50)}
                />    
            <Button 
                color = '#FAD4D4'
                title="Dollar" 
                onPress = {() => setCount(count+100)}
                />
            </View>        
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#ecf0f1',
    padding: 8, 
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
  },
});
export default Change;