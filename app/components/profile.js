import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import React,{useState} from 'react';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About the Developer</Text>
      <Text style={styles.title2}> Allison Chanin</Text>
      <Text style={styles.paragraph}> Hi my name is Allison! I am a rising sophomore at Brandeis University. I have a dog named boba and I love crossstitching.
      </Text>
      <Image
        style= {[styles.image]}
        source={{
          uri: 'https://lucieheaton.com/wp-content/uploads/2021/09/web-winter-cottage-cross-stitch-pattern.jpg',
        }}
      />
      <Text style={styles.paragraph}>For the past year I have wanted to make a crossstitching app so people can have a more friendly user experience when making patterns. I would also like to make a social media aspect, where people can post about new patterns they have made or completed projects.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF2F2',
    alignItems: 'center',
    padding: 30,
    margin:20,
  },
  title: {
   fontSize: 30,
   fontWeight: 'bold',
   paddingBottom: 20,
  },
  title2: {
    fontSize: 20,
    fontWeight: 'bold',
   },
  paragraph:{
    paddingTop:15,
    paddingBottom: 15,
    textAlign: 'center',
    fontSize: 15,
  },
  image:{
    height: 200,
    width: 200,
    borderRadius: 10,
    borderColor: '#EF9F9F',
    borderWidth: 10,
  },
});

export default Profile;