import React, { useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { ListItem, ListItemDeleteAction, ListItemSeperator } from '../components/lists';
import Screen from '../components/Screen';

const initialMessages = [
    {
        id : 1,
        name : 'This is the long title. some other words to fill up the space. And some other things to say the title',
        description : 'This is the long SUBtitle. some other words to fill up the space. And some other things to say the title',
        image : require('../assets/author.jpg')
    },
    {
        id : 2,
        name : 'T2',
        description : 'D2',
        image : require('../assets/author.jpg')
    },
    {
        id : 3,
        name : 'T3',
        description : 'D3',
        image : require('../assets/author.jpg')
    },
    {
        id : 4,
        name : 'T4',
        description : 'D4',
        image : require('../assets/author.jpg')
    }
]

function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (message) => {
        const newMessages = messages.filter(m => m.id !== message.id);  //deleting the selected item from list
        setMessages(newMessages);
    }

    return (
        <Screen style={styles.screen}>
            <FlatList
                data = {messages}
                keyExtractor={messages => messages.id.toString()}
                renderItem={({item}) => 
                    <ListItem 
                        title={item.name}
                        subTitle={item.description}
                        image={item.image}
                        onPress={()=>{console.log(item)}}
                        renderRightActions={() => (
                            <ListItemDeleteAction onPress={() => handleDelete(item)} />
                        )}
                    />
                }
                ItemSeparatorComponent={ListItemSeperator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages(initialMessages);
                }}
            />
        </Screen>
    );
}


const styles = StyleSheet.create({
    screen : {
    }
})

export default MessagesScreen;