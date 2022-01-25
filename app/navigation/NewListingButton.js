import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

function NewListingButton({onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name='plus-circle' size={40} color={colors.white}/>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container : {
        alignItems : 'center',
        backgroundColor : colors.primary,
        borderColor : colors.white,
        borderWidth : 10,
        bottom : 20,
        borderRadius : 35,
        height : 70,
        justifyContent : 'center',
        width : 70
    }
})

export default NewListingButton;