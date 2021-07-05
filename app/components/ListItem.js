import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import colors from '../config/colors'
import AppHeading from './AppHeading'



const ListItem = ({title, subTitle, image}) => {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image}/>
            <View>
                <AppHeading style={styles.title}>{title}</AppHeading>
                <AppHeading style={styles.subTitle}>{subTitle}</AppHeading>
            </View>
        </View>
    )
}

export default ListItem

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding: 10
    },
    image:{
        width: 70,
        height: 70,
        borderRadius: '50%',
        marginRight: 10
    },
    title:{
        fontWeight: '500'
    },
    subTitle:{
        color: colors.medium
    }
})
