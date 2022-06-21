import React, { useState, useEffect } from 'react';
import { Text, FlatList, View, Image, TextInput, Button, StyleSheet} from 'react-native';

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
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
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


            <FlatList
                data={data}
                keyExtractor={({ strMeal }, index) => strMeal}
                renderItem={({ item }) => (
                    <View  styles={styles.display}>    
                        <Text style={styles.name}>{item.strMeal} 
                            <Image
                                style={styles.image}
                                source={item.strMealThumb}
                            />
                        </Text>
                    </View>
                )}
                
            />

        </View>
    );
}

export default Exam3cStart;