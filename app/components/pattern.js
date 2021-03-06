import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const Pattern = () => {
    return (
    <View style={styles.container}>
      <Text style={styles.title}>Build a Pattern</Text>
      <Text style={styles.title2}> Coming Soon!!!</Text>
      <Text style={styles.paragraph}> The ability to make and save your patterns is coming soon!!</Text>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
  title2: {
    fontSize: 20,
    fontWeight: 'bold',
   },
  paragraph:{
    paddingTop:15,
    textAlign: 'center',
    fontSize: 15,
  },
});

export default Pattern;