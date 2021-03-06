import React from 'react';
import { Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import colors from '../config/colors';

import AppText from './AppText';

function Card({title, subTitle, imageUrl, onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Image style={styles.image} source={{uri : imageUrl}} />
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subTitle}>{subTitle}</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card :{
        borderRadius : 15,
        backgroundColor : colors.white,
        marginBottom : 10,
        overflow : 'hidden',
    },
    detailsContainer : {
        padding : 20,
    },
    image : {
        width : '100%',
        height : 230

    },
    subTitle : {
        color : colors.secondary,
        // fontWeight : 'bold',
    },
    title : {
        marginBottom : 7,
        fontWeight : 'bold',
    },
})

export default Card;