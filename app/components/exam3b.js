import React, { useState, useEffect } from 'react';
import { Text, FlatList, View, Image, TextInput, Button, StyleSheet, SafeAreaView} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      padding: 30,
    },
    title: {
     fontSize: 40,
     paddingBottom: 20,
    },
    display:{
        backgroundColor: '#F8D5B1',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderWidth:5,
        flexDirection:'row',
    },
    name:{
        textAlign: 'center',
        fontSize: 30,
    },
    image:{
      height: 100,
      width: 100,
    },
});

const Item = ({ title, link }) => (
    <View style={styles.display}>
      <Text style={styles.title}>{title}</Text>
      <Image
            style={styles.image}
            source={link}
        />

    </View>
  );


const Exam3cStart = () => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [tmpingredient,setTmpIngredient] = useState("")

    const [ingredient,setIngredient] = useState("")


    const getMeals = async () => {
        try {
          const url = "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + ingredient + ""
          const response = await fetch(url);
          const json = await response.json();
          setData(json.meals); 
        } catch (error) {
          console.error(error);
        } finally {
            setLoading(false);
        }
      };

    useEffect(() => {getMeals()}, [ingredient])

    const renderItem = ({ item }) => (
        <Item 
            title={item.strMeal} 
            link = {item.strMealThumb}
        />
    );

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Meal Finder</Text>
            <TextInput
                style={{height: 40}}
                placeholder="Enter the ingredient"
                onChangeText={newText => setTmpIngredient(newText)}
                defaultValue={tmpingredient}
            />
            <Button
                title='search'
                onPress = {() => {
                    setIngredient(tmpingredient)
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

export default Exam3cStart;