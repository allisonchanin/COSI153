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
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import Profile from './components/profile';
import Profile2Context from './components/profile2WithContext';
import Pattern from './components/pattern';
import PaletteContext from './components/palette';
import PalettePreview from './components/paletteShow';
import WaitingPattern from './components/waitingPattern';

import AsyncValueProvider,{useAsyncValue} from './components/asyncValueContext';
import ValueProvider,{useValue} from './components/ValueContext';


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

function BuildPattern({ navigation }) {
  let paletteInfo = {colors:[]}
  return (
    <ValueProvider value={paletteInfo}>
      <ScrollView style={styles.container}>
        <Pattern></Pattern>
        <PalettePreview></PalettePreview>
        <PaletteContext></PaletteContext>
        <Button 
          color = '#FAD4D4'
          title="Go Back" 
          onPress={() => navigation.goBack()} />
      </ScrollView>
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

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown : false}} />
      <Stack.Screen name="Profile2" component={Profile2Screen} options={{headerShown : false}} />
      <Stack.Screen name="Pattern" component={BuildPattern} options={{headerShown : false}} />
      <Stack.Screen name="Cocktail" component={CocktailScreen} options={{headerShown : false}} />
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
    padding:10,
    margin:5,
  },
  title: {
    fontSize: 30,
    paddingBottom: 20,
   },
});
