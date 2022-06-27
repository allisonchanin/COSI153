/*
  Page to edit your name and email ...
*/
import React,{useState} from 'react';
import {View,Text,TextInput,Button} from 'react-native';
import ValueProvider,{useValue} from './ValueContext';


const Profile2 = () => {
    const {currentValue,setCurrentValue} = useValue();
    const [name,setName] = useState("anon");
    const [email,setEmail] = useState("anon@anon.com");

    return (
        <View>
            <Text> Profile Page! </Text>
            <TextInput
                style={{height: 40}}
                placeholder="Enter your name"
                onChangeText={newText => setName(newText)}
                defaultValue={name}
            />
            <TextInput
                style={{height: 40}}
                placeholder="Enter your name"
                onChangeText={newText => setEmail(newText)}
                defaultValue={email}
            />
            <Button
                title='save'
                color = '#FAD4D4'
                onPress = {() => {
                    setCurrentValue({name:name,email:email});
                }}
            />


        </View>
    )
}	

export default Profile2;