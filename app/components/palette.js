import React, { useState, useEffect } from 'react';
import { useValue } from './ValueContext';
import { StyleSheet, Text, ScrollView, TextInput, Button, FlatList, Image, View } from 'react-native';


const Palette = () => {
    const {currentValue,setCurrentValue} = useValue();
    const [color,setColor] = useState("");

    const [search,setSearch] = useState("");

    const threadList = require ('../assets/DMC-colors.json');
    const [visibleThreads, setVisibleThreads] = useState(threadList);

    return (
    <View style={styles.container}>
      <Text style={styles.title}>Build a Palette</Text>
      <Text> {JSON.stringify(currentValue.names)} </Text>
      <Button
            title = 'Clear Palette'
            color = '#FAD4D4'
            onPress={() => setCurrentValue({ 
              colors:currentValue.colors = [],
              names:currentValue.names = []
          })
            }
          />
      <TextInput
        style={{height: 40}}
        placeholder="Enter the Color to search"
        onChangeText={newText => setSearch(newText)}
        defaultValue={search}
      />
      <Button
        title='search'
        color = '#FAD4D4'
        onPress = {() => {
        setVisibleThreads(threadList.filter((x) => (x.colorCategory==search) ))
        }}
      />
      <FlatList
        data={visibleThreads}
        keyExtractor={({ numberID }, index) => numberID}
        renderItem={({ item }) => (
        <View style={styles.display}>
          <Image
            style={{borderRadius: 10,
            width:45,
            height:45}}
            source={{uri:item.strImage}}
          />
          <Text>{item.name}, {item.numberID}</Text>
          <Button
            title='add'
            color = '#FAD4D4'
            onPress = {() => {
            setCurrentValue({ 
              colors:currentValue.colors.concat([item]),
              names:currentValue.names.concat([item.name]),
            })
            }}
          />
        </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF2F2',
    alignItems: 'center',
  },
  title: {
   fontSize: 30,
   fontWeight: 'bold',
   paddingBottom: 20,
  },
  display:{
    backgroundColor: '#FFF1FA',
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth:2,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
},
});

export default Palette;