import React, { useState, useEffect } from 'react';
import { Text, FlatList, View, Image, TextInput, Button, StyleSheet, SafeAreaView} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      padding: 30,
    },
    title: {
     fontSize: 30,
     paddingBottom: 20,
    },
    display:{
        flexDirection:'row',
    },
    name:{
        textAlign: 'center',
        fontSize: 30,
    },
    image:{
      height: 250,
      width: 250,
    },
});

const Item = ({ title,category,link,instructions }) => (
    <View>
        <Text style={styles.title}>{title} /  {category}</Text>
        <View style={styles.display}>
            <Image
                style={styles.image}
                source={link}
            />
            <Text>{instructions}</Text>
        </View>
    </View>
  );


const Exam6 = () => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [tmpLetter,setTmpLetter] = useState("")

    const [letter,setLetter] = useState("")


    const getMeals = async () => {
        try {
          const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=" + letter + ""
          const response = await fetch(url);
          const json = await response.json();
          setData(json.meals); 
        } catch (error) {
          console.error(error);
        } finally {
            setLoading(false);
        }
      };

    useEffect(() => {getMeals()}, [letter])

    const renderItem = ({ item }) => (
        <Item 
            title={item.strMeal} 
            category = {item.strCategory}
            link = {item.strMealThumb}
            instructions = {item.strInstructions}
        />
    );

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Meals by Letter</Text>
            <Text>Pick a letter</Text>
            <TextInput
                style={{height: 40}}
                placeholder="Enter the letter"
                onChangeText={newText => setTmpLetter(newText)}
                defaultValue={tmpLetter}
            />
            <Button
                title='Get Meals'
                onPress = {() => {
                    setLetter(tmpLetter)
                }}
            />


        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={({ strMeal }, index) => strMeal}            />
        </SafeAreaView>

        </View>
    );
}

export default Exam6;