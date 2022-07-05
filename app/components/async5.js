import React, {useState} from 'react';
import {View,Text,TextInput,Button,FlatList} from 'react-native';
import {useValue} from './ValueStorageContext';

const Async5 = () => {
    const {currentValue} = useValue();
    const [feedback,setFeedback] = useState("");
    return (
        <View>
            <Text> Here is the feedback </Text>
            <Text>
                Feedback goes here {JSON.stringify(currentValue.getFeedback())}
            </Text>
        </View>
    )
}

export default Async5;