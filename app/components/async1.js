import React,{useState} from 'react';
import {View,Text,TextInput,Button} from 'react-native';
import {useValue} from './asyncValueContext'; // to use/change shared values

const Async1 = () => {
    const [name,setName] = useState("");
    const [age,setAge] = useState(0);
    const [weight,setWeight] = useState(0);
    const [height,setHeight] = useState(0);

    const {currentValue,setCurrentValue} = useValue();
    return ( 
        <View style={{flex:1}}>
            <Text>currentValue = {JSON.stringify(currentValue)} </Text>
            <View style={{flexDirection:'column', alignItems:'center', justifyContent:'space-evenly', flex:1}}>
                <View style={{flexDirection:'row'}}>
                    <Text>name  </Text>
                    <TextInput
                        style={{backgroundColor:'green'}}
                        onChangeText = {(text)=>setName(text)} 
                    />
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text>age   </Text>
                    <TextInput
                        style={{backgroundColor:'blue'}}
                        onChangeText = {(text)=>setAge(text)} 
                    />
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text>weight    </Text>
                    <TextInput
                        style={{backgroundColor:'pink'}}
                        onChangeText = {(text)=>setWeight(text)} 
                    />
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text>height    </Text>
                    <TextInput
                        style={{backgroundColor:'cyan'}}
                        onChangeText = {(text)=>setHeight(text)} 
                    />
                </View>
            </View>
            <Button 
               title="save profile"
               onPress = {() => 
                    setCurrentValue({...currentValue,name,age,weight,height})
                }
               />
            
        </View>
    )
}
export default Async1;