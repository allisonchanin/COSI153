//code from exam5
//import AsyncContext from './components/asyncContextDemo';
//export default AsyncContext;

//code for exam 6
//import exam6 from './components/exam6';
//export default exam6;


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
import Profile2Context from './components/profile2WithContext';
import Pattern from './components/pattern';
import BMI from './components/bmi';
import Change from './components/change';
import Counter from './components/counter';
import Cylinder from './components/cylindervolume';
import GitHubDemo from './components/githubdemo';
import NamedCounter from './components/namedCounter';
import { useState } from 'react';
import AsyncValueProvider,{useAsyncValue} from './components/asyncValueContext';
import ValueProvider,{useValue} from './components/ValueContext';

import Context from './components/contextDemo';
import PaletteContext from './components/palette';
import PalettePreview from './components/paletteShow';
import WaitingPattern from './components/waitingPattern';


const AppContext = () => {
    let data = {name:'a', email:'a@c.com'}
    return (
      <AsyncValueProvider value={data} tag='app'>
          <App />
      </AsyncValueProvider>
    )
  }
export default AppContext;

function HomeScreen({ navigation }) {
    const {currentValue} = useAsyncValue();
  return (
    <View style={styles.first}> 
    <Text style={styles.title}>Home screen for {currentValue.name}  </Text>
      <Text style={styles.title}> with email {currentValue.email}</Text>
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
         title = 'Make a Cocktail'
          color = '#FAD4D4'
         onPress={() => navigation.navigate('Cocktail')}
        />
      </View>
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Profile></Profile>
      <Button
         color = '#FAD4D4'
         title="Go to enter info"
          onPress={() => navigation.navigate('Profile2')}
        />
      <Button 
        color = '#FAD4D4'
        title="Go Back" 
        onPress={() => navigation.goBack()} />
    </View>
  );
}

function Profile2Screen({ navigation }) {
  return (
    <View style={styles.container}>
      <Profile2Context/>
      <Button 
        color = '#FAD4D4'
        title="Go Back" 
        onPress={() => navigation.goBack()} />
    </View>
  );
}

// const PaletteWithContext = ({ navigation }) => {
//   let paletteInfo = {colors:[], names:[]}
//   return (
//     <ValueProvider value={paletteInfo}>
//         <BuildPattern />
//     </ValueProvider>
//   )
// }

function BuildPattern({ navigation }) {
  let paletteInfo = {colors:[]}
  return (
    <ValueProvider value={paletteInfo}>
      <View style={styles.container}>
        <Pattern></Pattern>
        <PalettePreview></PalettePreview>
        <PaletteContext></PaletteContext>
        <Button 
          color = '#FAD4D4'
          title="Go Back" 
          onPress={() => navigation.goBack()} />
      </View>
    </ValueProvider> 
  );
}

function CocktailScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <WaitingPattern></WaitingPattern>
      <Button 
        color = '#FAD4D4'
        title="Go Back" 
        onPress={() => navigation.goBack()} />
    </View>
  );
}

// function ClassScreen({ navigation }) {
//   return (
//     <View style={styles.first}>
//       <Button
//         color = '#FAD4D4'
//         title="Go to BMI"
//         onPress={() => navigation.navigate('BMI')}
//       />
//       <Button
//         color = '#FAD4D4'
//         title="Go to Change"
//         onPress={() => navigation.navigate('Change')}
//       />
//       <Button
//         color = '#FAD4D4'
//         title="Go to Counter"
//         onPress={() => navigation.navigate('Counter')}
//       />
//       <Button
//         color = '#FAD4D4'
//         title="Go to Cylinder"
//         onPress={() => navigation.navigate('Cylinder')}
//       />
//       <Button
//         color = '#FAD4D4'
//         title="Go to Named Counter"
//         onPress={() => navigation.navigate('NamedCounter')}
//       />
//       <Button
//         color = '#FAD4D4'
//         title="Go to Named Context Counter"
//         onPress={() => navigation.navigate('NamedCounterContext')}
//       />
//        <Button
//         color = '#FAD4D4'
//         title="Go to Github"
//         onPress={() => navigation.navigate('Github')}
//       />
//       <Button
//         color = '#FAD4D4'
//         title="Go Back" 
//         onPress={() => navigation.goBack()} />
//     </View>

//   );
// }

// function BMIScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <BMI></BMI>
//       <Button
//         color = '#FAD4D4'
//         title="Go Back" 
//         onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

// function ChangeScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Change></Change>
//       <Button
//         color = '#FAD4D4'
//         title="Go Back" 
//         onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

// function CounterScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Counter></Counter>
//       <Button
//         color = '#FAD4D4'
//         title="Go Back" 
//         onPress={() => navigation.goBack()} />    
//     </View>
//   );
// }

// function CylinderScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Cylinder></Cylinder>
//       <Button
//         color = '#FAD4D4'
//         title="Go Back" 
//         onPress={() => navigation.goBack()} />    
//     </View>
//   );
// }

// function NCounterScreen({ navigation }) {
//     const[total,setTotal] = useState(0);
//     const updateTotal = (v) => setTotal(v+total);
//     const[coins,setCoins] = useState(0);
//     const updateCoins = () => setCoins(coins+1);
//   return (
//     <View style={styles.container}>
//       <Text>{coins} coins</Text>
//       <Text>Total is {total}</Text>
//       <NamedCounter label="penny" value={1} updateTotal={updateTotal} updateCoins={updateCoins}></NamedCounter>
//       <NamedCounter label="nickel" value={5} updateTotal={updateTotal} updateCoins={updateCoins}></NamedCounter>
//       <NamedCounter label="dime" value={10} updateTotal={updateTotal} updateCoins={updateCoins}></NamedCounter>
//       <Button
//         color = '#FAD4D4'
//         title="Go Back" 
//         onPress={() => navigation.goBack()} />    
//     </View>
//   );
// }

// function NCounterContextScreen({ navigation }) {
// return (
//   <View style={styles.container}>
//     <Context></Context>
//     <Button
//         color = '#FAD4D4'
//         title="Go Back" 
//         onPress={() => navigation.goBack()} />
//   </View>
// );
// }

// function GitHubScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <GitHubDemo></GitHubDemo>
//       <Button
//         color = '#FAD4D4'
//         title="Go Back" 
//         onPress={() => navigation.goBack()} />    </View>
//   );
// }

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown : false}} />
      <Stack.Screen name="Profile2" component={Profile2Screen} options={{headerShown : false}} />
      <Stack.Screen name="Pattern" component={BuildPattern} options={{headerShown : false}} />
      <Stack.Screen name="Cocktail" component={CocktailScreen} options={{headerShown : false}} />


      {/* <Stack.Screen name="Cosi153" component={ClassScreen} options={{headerShown : false}} />
      <Stack.Screen name="BMI" component={BMIScreen} options={{headerShown : false}} />
      <Stack.Screen name="Change" component={ChangeScreen} options={{headerShown : false}} />
      <Stack.Screen name="Counter" component={CounterScreen} options={{headerShown : false}} />
      <Stack.Screen name="Cylinder" component={CylinderScreen} options={{headerShown : false}} />
      <Stack.Screen name="NamedCounter" component={NCounterScreen} options={{headerShown : false}} />
      <Stack.Screen name="NamedCounterContext" component={NCounterContextScreen} options={{headerShown : false}} />
      <Stack.Screen name="Github" component={GitHubScreen} options={{headerShown : false}} /> */}
    </Stack.Navigator>
  );
}

function App() {
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
    flex: 1,
    flexDirection:'column',
    justifyContent: 'space-evenly',
    backgroundColor: '#FFF2F2',
    alignItems: 'center',
    padding: 10,
    margin:5,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF2F2',
    alignItems: 'center',
    padding:10,
    margin:5,
  },
  title: {
    fontSize: 30,
    paddingBottom: 20,
   },
});
