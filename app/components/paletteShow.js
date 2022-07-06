import React, { useState, useEffect } from 'react';
import { useValue } from './ValueContext';
import { StyleSheet, Text, ScrollView, TextInput, Button, FlatList, Image, View } from 'react-native';


const PaletteShow = () => {
    const {currentValue,setCurrentValue} = useValue();

    return (
    <View style={styles.container}>
      <FlatList
        data={currentValue.colors}
        keyExtractor={({ numberID }, index) => numberID}
        renderItem={({ item }) => (
        <View style={{
            width:500,
            height:50,
            backgroundColor: item.hex,
            marginVertical: 8,
            marginHorizontal: 16,
            borderWidth:2,
            flexDirection:'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            }}>
            <Image
                style={{borderRadius: 10,
                width:45,
                height:45}}
                source={{uri:item.strImage}}
            />
            <Text style={styles.title}> {item.numberID} {item.name} </Text>
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
   fontSize: 20,
   paddingBottom: 20,
  },
});

export default PaletteShow