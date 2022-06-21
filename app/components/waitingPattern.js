import React, { useState, useEffect } from 'react';
import { Text, FlatList, View, Image, TextInput, Button, StyleSheet, SafeAreaView} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 30,
    },
    title: {
     fontSize: 40,
     paddingBottom: 20,
    },
    display:{
        backgroundColor: '#FAD4D4',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderWidth:5,
        flexDirection:'row',
        justifyContent:'space-between',
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


const WaitingPattern = () => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [tmpCocktail,setTmpCocktail] = useState("martini")

    const [cocktail,setCocktail] = useState("")


    const getMeals = async () => {
        try {
          const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + cocktail + ""
          const response = await fetch(url);
          const json = await response.json();
          setData(json.drinks); 
        } catch (error) {
          console.error(error);
        } finally {
            setLoading(false);
        }
      };

    useEffect(() => {getMeals()}, [cocktail])

    const renderItem = ({ item }) => (
        <Item 
            title={item.strDrink} 
            link = {item.strDrinkThumb}
        />
    );

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Cocktail Finder</Text>
            <TextInput
                style={{height: 40}}
                placeholder="Enter the cocktail"
                onChangeText={newText => setTmpCocktail(newText)}
                defaultValue={tmpCocktail}
            />
            <Button
                title='search'
                color = '#FAD4D4'
                onPress = {() => {
                    setCocktail(tmpCocktail)
                }}
            />


        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={({ strDrink }, index) => strDrink}            />
        </SafeAreaView>

        </View>
    );
}

export default WaitingPattern;