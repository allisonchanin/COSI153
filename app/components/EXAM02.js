import React, { useState } from 'react';
import { Text, TextInput, View, Button, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
    },
  });

const Distance = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [z, setZ] = useState(0);
  const [distance, setDistance] = useState(0);

  return (
    <View style={styles.container}>
      <Text style = {styles.title}>Distance of (x,y,z) from (0,0,0)</Text>
      <Text>Write the code for this app which calculates</Text>
      <Text>d = Math.sqrt(x*x+y*y+z*z)</Text>
      <TextInput
        style={{height: 40}}
        placeholder="Enter the X"
        onChangeText={newText => setX(parseFloat(newText))}
        defaultValue={x}
      />
       <TextInput
        style={{height: 40}}
        placeholder="Enter the Y"
        onChangeText={newText => setY(parseFloat(newText))}
        defaultValue={y}
      />
        <TextInput
        style={{height: 40}}
        placeholder="Enter the Z"
        onChangeText={newText => setZ(parseFloat(newText))}
        defaultValue={z}
      />
      <View style={{flexDirection:'row'}}>
        <Button
        title='calculate distance'
        onPress = {() => {
            setDistance(Math.sqrt(x*x + y*y + z*z) )
        }}
        />
      </View>
      <Text>
        distance to ({x},{y},{z}) is d = {distance}
      </Text>
    </View>
  );
}

export default Distance;