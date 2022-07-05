import React,{useState} from 'react';
import {View,Text,TextInput, Button} from 'react-native';
import {useValue} from './asyncValueContext';

const Async4 = () => {
    const {currentValue} = useValue();
    const [feedback, setFeedback] = useState("");

    return (
        <View>
            <Text> Give some feedback please</Text>
            <TextInput
                placeholder='feedback'
                onChangeText={(text) => setFeedback(text)}
            /> 
            <Button
                title="send feedback"
                onPress = {() => currentValue.sendFeedback(feedback)}
            />
        </View>
    )
}

export default Async4;