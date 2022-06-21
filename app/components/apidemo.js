import React, { useEffect, useState } from 'react';
import { Text, TextInput, View, Button, FlatList } from 'react-native';


const Apidemo = () => {
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(true);

    const getMoviesFromApiAsync = async () => {
        try {
            const response = await fetch(
                'https://reactnative.dev/movies.json'
            );
            const json = await response.json();
    
            setData(json.movies);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {getMoviesFromApiAsync()}, [])
    
    return(
        <View>
           <Text>Api Demo</Text> 
           <FlatList
                data={data.slice(0,10)}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                    <Text>{item.title}, {item.releaseYear}</Text>
                )}
            />
            <Text>   </Text>
           <Text>{JSON.stringify(data)}</Text>
        </View>
    )
}

export default Apidemo;