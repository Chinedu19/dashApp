import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import colors from '../config/colors'
import AppHeading from './AppHeading'

const Card = ({title, subTitle, image}) => {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image}/>
            <View style={styles.detailContainer}>
            <AppHeading style={styles.title}>{title}</AppHeading>
            <AppHeading style={styles.subTitle}>{subTitle}</AppHeading>
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    card : {
        borderRadius : 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden'
    },
    image:{
        width: '100%',
        height: 200
    },
    detailContainer : {
        padding: 20
    },
    title :{
        marginBottom: 7
    },
    subTitle :{
        color : colors.secondary,
        fontWeight : 'bold'
    }
})
