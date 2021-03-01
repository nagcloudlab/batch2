
import React, { useState } from 'react';
import { View, FlatList, SafeAreaView, Text } from 'react-native';

import Screen from "../components/Screen";

import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";



const initialMessages = [
    {
        id: 1,
        title: "T1",
        description: "D1",
        image: require('../assets/nag.jpeg')
    },
    {
        id: 2,
        title: "T2",
        description: "D2",
        image: require('../assets/nag.jpeg')
    }
]

function MessagesScreen(props) {

    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (message) => {
        // Delete the message from messages
        setMessages(messages.filter((m) => m.id !== message.id));
    };

    return (
        <Screen style={{ flex: 1, paddingTop: 40 }}>
            <FlatList
                data={messages}
                keyExtractor={(message) => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log("Message selected", item)}
                        renderRightActions={() => (
                            <ListItemDeleteAction onPress={() => handleDelete(item)} />
                        )}

                    />
                )
                }
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 3,
                            title: 'T3',
                            description: 'D3',
                            image: require('../assets/nag.jpeg')
                        }
                    ])
                }}
            />
        </Screen>
    );
}

export default MessagesScreen;