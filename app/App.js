// command option j to open java script in chrome
// use expo start in terminal instead of npm start

//note: make buttons dark

import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Button } from 'react-native';

//import Pomodoros from './components/pomodoro';
import Profile from './components/profile';
import Pattern from './components/pattern';
import BMI from './components/bmi';
import Change from './components/change';
import Counter from './components/counter';
import Cylinder from './components/cylindervolume';
import GitHubDemo from './components/githubdemo';


function HomeScreen({ navigation }) {
  return (
    <View style={styles.first}>
      <Button
        color = '#FAD4D4'
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button
        title = 'Build a Pattern'
        color = '#FAD4D4'
        onPress={() => navigation.navigate('Pattern')}
      />
      <Button
        color = '#FAD4D4'
        title="Go to Class"
        onPress={() => navigation.navigate('Cosi153')}
      />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Profile></Profile>
      <Button 
        color = '#FAD4D4'
        title="Go Back" 
        onPress={() => navigation.goBack()} />
    </View>
  );
}

function BuildPattern({ navigation }) {
  return (
    <View style={styles.container}>
      <Pattern></Pattern>
      <Button 
        color = '#FAD4D4'
        title="Go Back" 
        onPress={() => navigation.goBack()} />
    </View>
  );
}

function ClassScreen({ navigation }) {
  return (
    <View style={styles.first}>
      <Button
        color = '#FAD4D4'
        title="Go to BMI"
        onPress={() => navigation.navigate('BMI')}
      />
      <Button
        color = '#FAD4D4'
        title="Go to Change"
        onPress={() => navigation.navigate('Change')}
      />
      <Button
        color = '#FAD4D4'
        title="Go to Counter"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        color = '#FAD4D4'
        title="Go to Cylinder"
        onPress={() => navigation.navigate('Cylinder')}
      />
       <Button
        color = '#FAD4D4'
        title="Go to Github"
        onPress={() => navigation.navigate('Github')}
      />
      <Button
        color = '#FAD4D4'
        title="Go Back" 
        onPress={() => navigation.goBack()} />
    </View>

  );
}

function BMIScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <BMI></BMI>
      <Button
        color = '#FAD4D4'
        title="Go Back" 
        onPress={() => navigation.goBack()} />
    </View>
  );
}

function ChangeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Change></Change>
      <Button
        color = '#FAD4D4'
        title="Go Back" 
        onPress={() => navigation.goBack()} />
    </View>
  );
}

function CounterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Counter></Counter>
      <Button
        color = '#FAD4D4'
        title="Go Back" 
        onPress={() => navigation.goBack()} />    </View>
  );
}

function CylinderScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Cylinder></Cylinder>
      <Button
        color = '#FAD4D4'
        title="Go Back" 
        onPress={() => navigation.goBack()} />    </View>
  );
}

function GitHubScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <GitHubDemo></GitHubDemo>
      <Button
        color = '#FAD4D4'
        title="Go Back" 
        onPress={() => navigation.goBack()} />    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Cosi153" component={ClassScreen} />
      <Stack.Screen name="Pattern" component={BuildPattern} />
      <Stack.Screen name="BMI" component={BMIScreen} />
      <Stack.Screen name="Change" component={ChangeScreen} />
      <Stack.Screen name="Counter" component={CounterScreen} />
      <Stack.Screen name="Cylinder" component={CylinderScreen} />
      <Stack.Screen name="Github" component={GitHubScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
// const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
//export default App;

const styles = StyleSheet.create({
  first: {
    flex:1,
    flexDirection:'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#FFF2F2',
    alignItems: 'center',
    padding: 30,
    margin:20,
  },
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
});
