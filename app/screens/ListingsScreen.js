import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';

const listings = [
    {
        id : 1,
        title : 'Black Top',
        price : 100,
        image : require('../assets/cardDemo.jpg')
    },
    {
        id : 2,
        title : 'Pebble in black',
        price : 1000,
        image : require('../assets/pebble.jpg')
    },
    {
        id : 3,
        title : 'PebbloBar',
        price : 1000,
        image : require('../assets/pebble.jpg')
    }
]

function ListingsScreen(props) {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({item}) => (
                    <Card
                        title={item.title}
                        subTitle={'$' + item.price }
                        image={item.image}
                    />
                )}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen : {
        padding : 20,
        backgroundColor : colors.light,
    }
})

export default ListingsScreen;