import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

import AppHeading from '../components/AppHeading'
import ListItem from '../components/Lists/ListItem'
import colors from '../config/colors'


const ListingDetailsScreen = () => {
    return (
        <View>
            <Image source={require('../assets/background.jpg')} style={styles.image}/>
            <View style={styles.detailContainer}>
            <AppHeading style={styles.title}>Red Jacket</AppHeading>
            <AppHeading style={styles.price}>$100</AppHeading>
            </View>
            <View style={styles.innerContainer}>
                <ListItem title='Austin Ezeh' subTitle='2 Listings' image={require('../assets/fineboy.jpg')}/>
            </View>
        </View>
    )
}

export default ListingDetailsScreen

const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: 300
    },
    detailContainer : {
        padding: 20
    },
    title :{
        marginBottom: 7,
        fontSize : 24,
        fontWeight: '500'
    },
    price :{
        color : colors.secondary,
        fontWeight : 'bold',
        fontSize: 20
    }
})
