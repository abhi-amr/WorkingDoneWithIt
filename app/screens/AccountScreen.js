import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Icon from '../components/Icon';
import { ListItem, ListItemSeperator} from '../components/lists';
import Screen from '../components/Screen';
import colors from '../config/colors';
import useAuth from '../auth/useAuth';

const menuItems = [
    {
        title : 'My Listings',
        icon : {
            name : 'format-list-bulleted',
            backgroundColor : colors.primary
        }
    },
    {
        title : 'My Messages',
        icon : {
            name : 'email',
            backgroundColor : colors.secondary
        },
        targetScreen : 'Messages',
    }
]

function AccountScreen({navigation}) {
    const { user, logout } = useAuth();
    
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem 
                    title={user.name}
                    subTitle='shadowclonejutsu@fav.com'
                    image={require('../assets/author.jpg')}
                />
            </View>
            <View style={styles.container}>
                <FlatList 
                    data={menuItems}
                    keyExtractor={ menuItem => menuItem.title.toString() }
                    ItemSeparatorComponent={ListItemSeperator}
                    renderItem={({item}) => 
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon 
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                            onPress={() => navigation.navigate(item.targetScreen)}
                        />
                    }
                />
            </View>
            <ListItem 
                title='Logout'
                IconComponent={
                    <Icon name='logout' backgroundColor={colors.yellow} />
                }
                onPress={() => logout()}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container : {
        marginVertical : 20,
    },
    screen : {
        backgroundColor : colors.light,
    }
})

export default AccountScreen;