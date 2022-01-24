import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import colors from '../config/colors';
import AppText from './AppText';
import Icon from './Icon';


function CategoryPickerItem({item, onPress}) {
    return (
        // <TouchableOpacity  onPress={onPress}>
            <View style={styles.container}>
                <Icon name={item.icon} backgroundColor={item.backgroundColor} size={80}/>
                <AppText style={styles.label}>{item.label}</AppText>
            </View>
        // </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container : {
        paddingHorizontal : 30,
        paddingVertical : 15,
        alignItems : 'center',
        width : '33%',
    },
    label : {
        marginTop : 5,
        textAlign : 'center',
    }
})

export default CategoryPickerItem;