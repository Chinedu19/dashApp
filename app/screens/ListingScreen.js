import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Card from '../components/Card'
import Screen from '../components/Screen'
import colors from '../config/colors'


const listItems = [
    {
        id: 1,
        title: 'Red Jacket for sale',
        price: 100,
        image: require('../assets/fineboy.jpg')
    },
    {
        id: 2,
        title: 'Blue roses and manequins',
        price: 50.32,
        image: require('../assets/chair.jpg')
    }
]
const ListingScreen = () => {
    return (
        <Screen style={styles.screen}>
            <FlatList
            data={listItems}
            keyExtractor={(items) => items.id.toString()}
            renderItem={({ item }) =>(
                <Card title={item.title} subTitle={"$"+ item.price} image={item.image}/>
            )}
            />
        </Screen>
    )
}

export default ListingScreen

const styles = StyleSheet.create({
    screen:{
        paddingHorizontal: 4,
        paddingTop: 10,
        backgroundColor: colors.light
    }
})
