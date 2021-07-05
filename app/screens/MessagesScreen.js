import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import ListItem from '../components/ListItem'
import ListItemDeleteAction from '../components/ListItemDeleteAction'
import ListItemSeparator from '../components/ListItemSeparator'
import Screen from '../components/Screen'

const messages = [
    {
        id : 1,
        title : 'T1',
        description : 'D1',
        image : require('../assets/fineboy.jpg')
    },
    {
        id : 2,
        title : 'T2',
        description : 'D3',
        image : require('../assets/fineboy.jpg')
    },
    {
        id : 3,
        title : 'T3',
        description : 'D3',
        image : require('../assets/fineboy.jpg')
    },
    ]
const MessagesScreen = () => {
    
    return (
        <Screen>
        <FlatList
        data={messages}
        keyExtractor={messages => messages.id.toString()}
        renderItem={
            ({item}) => <ListItem title={item.title} subTitle={item.description} image={item.image} onPress={() => console.log(item.id + " pressed just now")} renderRightActions={ListItemDeleteAction}/>
        }
        ItemSeparatorComponent={ListItemSeparator}
        />
        </Screen>
    )
}

export default MessagesScreen

const styles = StyleSheet.create({})
