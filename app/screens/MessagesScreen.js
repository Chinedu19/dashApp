import React, {useState} from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import ListItem from '../components/Lists/ListItem'
import ListItemDeleteAction from '../components/Lists/ListItemDeleteAction'
import ListItemSeparator from '../components/Lists/ListItemSeparator'
import Screen from '../components/Screen'

const initialMessage = [
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
    const [messages, setMessages] = useState(initialMessage);
    const [refreshing, setRefreshng] = useState(false);

    const handleDelete = message => {
        setMessages(messages.filter(m => m.id !== message.id));

    }
    return (
        <Screen>
            <FlatList
            data={messages}
            keyExtractor={messages => messages.id.toString()}
            renderItem={
                ({item}) => <ListItem title={item.title} subTitle={item.description} image={item.image} onPress={() => console.log(item.id + " pressed just now")} 
                renderRightActions={
        
                  () =>  <ListItemDeleteAction onPress={() => handleDelete(item)}/>
                
                }/>
            }
            ItemSeparatorComponent={ListItemSeparator}
            refreshing={refreshing}
            onRefresh={
                () => {
                    setMessages([
                        {
                            id : 2,
                            title : 'T2',
                            description : 'D3',
                            image : require('../assets/fineboy.jpg')
                        }
                    ]);
                }
            }
            />
        </Screen>
    )
}

export default MessagesScreen

const styles = StyleSheet.create({})
