import React, { useState } from 'react';
import { FlatList, Text, StyleSheet, View} from 'react-native';

const data = 
[
    {key:'Tim', email:'tjhickey@brandeis.edu', location:'Brookline, MA, USA',age:66},
    {key:'Anthony',email:'anthonyquinn@brandeis.edu',location:'Norwood,MA,USA',age: 21},
    {key:'Daniel', email:'danielmints@brandeis.edu', location:'Boston, MA, USA', age:21},
    {key:'Harry', email:'harryyu@brandeis.edu', location:'Waltham, MA, USA', age:19},
    {key: 'Oriana', email:'sihechen@brandeis.edu', location:'Albany, NY, USA', age: '21'},
    {key: 'Alicia', email: 'tujy@brandeis.edu', location: 'Waltham, MA, USA', age: 21},
    {key:'Allison', email:'allisonchanin@brandeis.edu',location:'Palo Alto, CA', age: 18},
    {key:'Karen', email: 'karenmai@braneis.edu', location: 'Boston, MA', age: '19'},
    {key:'Rex Xing', email:'qishixing@brandeis.edu', location:'Waltham, MA, USA', age:22},
    {key:'Nathan', email: 'nathanieltran@brandeis.edu', location: 'Newton, MA', age: 20},
    {key: 'Ephraim', email: 'ezimmerman@brandeis.edu', location: 'South Haven, MI', age: '19'},
    {key:'Rotem', email: 'rotemarie@brandeis.edu', location:'Israel', age: '23'},
    {key:'Maggie', email:'maggiechang@brandeis.edu', location:'Irvine, CA, USA',age:'20'},
    {key:'Eric',email:'erichu@brandeis.edu',location:'Seattle,WA',age:'20'},
    {key:'Aria', email:'ariasmith@brandeis.edu', location:'Ellicott City,MD, USA', age: '20'},
    ];

const rosterItem = (item) => {
    return (
    <View style = {styles.itemContainer}>
        <Text style={styles.item} > {item.key}</Text>
        <Text style={styles.item} >{item.email}</Text>
        <Text style={styles.item} >{item.location}</Text>
        <Text style={styles.item} >{item.age}</Text>
    </View>
    )
}

const Roster = () => {
    return(
        <View style={styles.container}> 
            <Text style={styles.title}> Roster </Text>
            <FlatList
                data = {data}
                renderItem={({item}) => rosterItem(item)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    title: {
        padding: 10,
        fontSize: 25,
        height: 40,
    },
    item: {
      fontSize: 20,
      height: 40,
    },
    itemContainer: {
        padding: 30,
        borderWidth:2,
      },
  });

export default Roster;