import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import WaitingPattern from './components/waitingPattern';

const Pattern = () => {
    return (
    <View style={styles.container}>
      <Text style={styles.title}>Build a Pattern</Text>
      <Text style={styles.title2}> Coming Soon!!!</Text>
      <Text style={styles.paragraph}> The ability to make and save your patterns is coming soon!!
      </Text>
      <WaitingPattern></WaitingPattern>
      <StatusBar style="auto" />
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
   fontFamily: 'Roboto'
  },
  title2: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Roboto'
   },
  paragraph:{
    paddingTop:15,
    paddingBottom: 15,
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 15,
  },
});

export default Pattern;