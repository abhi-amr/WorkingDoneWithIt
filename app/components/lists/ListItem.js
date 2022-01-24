import React from 'react';
import { Image, View, StyleSheet, TouchableHighlight } from 'react-native';
import { GestureHandlerRootView, Swipeable } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../../config/colors';
import AppText from '../AppText';

function ListItem({title, subTitle, image, IconComponent, onPress, renderRightActions}) {
    return (
        <GestureHandlerRootView>
            <Swipeable renderRightActions={renderRightActions} >
                <TouchableHighlight
                underlayColor={colors.light}
                onPress={onPress}
                >
                    <View style={styles.container}>
                        {IconComponent}
                        {image && <Image style={styles.image} source={image}/>}
                        <View style={styles.detailsContainer}>
                            <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                            {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
                        </View>
                        <MaterialCommunityIcons 
                            color={colors.medium}
                            name='chevron-right'
                            size={25}
                        />
                    </View>
                </TouchableHighlight>
            </Swipeable>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container :{
        alignItems : 'center',
        flexDirection : 'row',
        padding : 15,
        backgroundColor : colors.white, //this is done while in AccountScreen for standing out from background
    },
    detailsContainer : {
        marginLeft : 10,
        justifyContent : 'center',
        flex : 1,
    },
    image : {
        width : 70,
        height : 70,
        borderRadius : 35,
    },
    subTitle : {
        color : colors.medium,
    },
    title : {
        fontWeight : '600'
    },
})

export default ListItem;