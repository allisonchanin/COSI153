import React, { useState, useEffect } from 'react';
import { Text, FlatList, View, TextInput, Button } from 'react-native';



const GitHubDemo = () => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [tmpusername,setTmpUsername] = useState("allisonchanin")

    const [username,setUsername] = useState("")

    const getRepos = async () => {
        try {
          const response = await fetch(link(username));
          const json = await response.json();
          setData(json); 
        } catch (error) {
          console.error(error);
        } finally {
            setLoading(false);
        }
      };

    useEffect(() => {getRepos()}, [username])

    const link = (username) => {
        return (
            'https://api.github.com/users/' + username + '/repos'
        )
    }

    return(
        <View>
            <Text>Github Demo</Text>

            <TextInput
                style={{height: 40}}
                placeholder="Enter the username"
                onChangeText={newText => setTmpUsername(newText)}
                defaultValue={tmpusername}
            />

        <Button
        color = '#FAD4D4'
        title='search'
        onPress = {() => {
            setUsername(tmpusername)
        }}
        />
            <FlatList
                data={data}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                    <a href={item.html_url}>{item.name}</a>
          )}
        />
           

        </View>
    );
}

export default GitHubDemo;