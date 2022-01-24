import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import AppText from '../components/AppText';
import { ListItem } from '../components/lists';
import colors from '../config/colors';

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/cardDemo.jpg')} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Black Top</AppText>
                <AppText style={styles.price}>$100</AppText>
                <View style={styles.userContainer}> 
                    <ListItem 
                        image={require('../assets/author.jpg')}
                        title='Hinata Uzumaki'
                        subTitle='69 Listings'
                        />
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    detailsContainer : {
        padding : 20,
    },
    image : {
        width : '100%',
        height : 250,
    },
    price : {
        color : colors.secondary,
        fontSize : 20,
        marginVertical : 10
    },
    title : {
        fontSize : 24,
        fontWeight : 'bold',
    },
    userContainer : {
        marginVertical : 40
    }
})

export default ListingDetailsScreen;