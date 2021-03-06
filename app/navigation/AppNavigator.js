import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ListingEditScreen from '../screens/ListingEditScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import NewListingButton from './NewListingButton';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {

    return (
        <Tab.Navigator screenOptions={{headerShown : false}}>
            <Tab.Screen 
                name="Feed" 
                component={FeedNavigator}
                options= {{
                    tabBarIcon : ({size, color}) => 
                        (<MaterialCommunityIcons name='home' size={size} color={color}/>)
                }}

            />
            
            <Tab.Screen 
                name="ListingEdit" 
                component={ListingEditScreen}
                options= {({navigation}) => ({
                    tabBarButton : () => <NewListingButton onPress={() => navigation.navigate("ListingEdit")} />,
                    tabBarIcon : ({size, color}) => 
                        (<MaterialCommunityIcons name='plus-circle' size={size} color={color}/>)
                })}
            />
            
            <Tab.Screen 
                name="MyAccount" 
                component={AccountNavigator}
                options= {{
                    tabBarIcon : ({size, color}) => 
                        (<MaterialCommunityIcons name='account' size={size} color={color}/>)
                }}
            />

        </Tab.Navigator>
    );
};

export default AppNavigator;