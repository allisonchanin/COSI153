import React, { useState, useEffect } from 'react';
import { useValue } from './ValueContext';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Image } from 'react-native';

const Palette = () => {
    const {currentValue,setCurrentValue} = useValue();
    const [color,setColor] = useState("");

    const threadList = require ('../assets/DMC-colors.json');

    return (
    <View style={styles.container}>
      <Text style={styles.title}>Build a Palette</Text>
      <Text> {JSON.stringify(currentValue.log)} </Text>

      <TextInput
                style={{height: 40}}
                placeholder="Enter the Color to add to your Palette"
                onChangeText={newText => setColor(newText)}
                defaultValue={color}
            />
        <Button
                title='add'
                color = '#FAD4D4'
                onPress = {() => {
                    setCurrentValue({ 
                        log:currentValue.log.concat([color])})
                    }}
            />
       <FlatList
                data={threadList}
                keyExtractor={({ numberID }, index) => numberID}
                renderItem={({ item }) => (
                    <View style={{flexDirection:"row"}}>
                    <Text>{item.name}, {item.numberID}</Text>
                    <Image
                      style={{width:50, height:50}}
                      source={item.strImage}
                    />

                    </View>
                )}
            />
      <Text>{JSON.stringify(threadList)}</Text>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF2F2',
    alignItems: 'center',
    padding: 30,
    margin:20,
  },
  title: {
   fontSize: 30,
   fontWeight: 'bold',
   paddingBottom: 20,
  },
});

export default Palette;