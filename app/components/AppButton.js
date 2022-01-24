import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import colors from '../config/colors';

function AppButton({title, onPress, color='primary'}) {
    return (
        <TouchableOpacity style={[ styles.button, {backgroundColor : colors[color]} ]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button : {
        backgroundColor : colors.primary,
        borderRadius : 26,
        justifyContent : 'center',
        alignItems : 'center',
        width : '100%',
        padding : 15,
        marginVertical : 10
    },
    text : {
        color : colors.white,
        textTransform : 'uppercase',
        fontSize : 18,
        fontWeight : 'bold'
    }
})

export default AppButton;