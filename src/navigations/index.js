import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HOME_SCREEN, MUSIC, SUB_CATEGORY } from '../constants/routeNames';
import HomeScreen from '../screens/HomeScreen';
import SubCategory from '../screens/SubCategory';
import MusicScreen from '../screens/MusicScreen';

const Stack = createStackNavigator();


export default AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerTitleAlign: 'center', }}>
                <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
                <Stack.Screen name={SUB_CATEGORY} component={SubCategory} options={{headerShown:false}} />
                <Stack.Screen name={MUSIC} component={MusicScreen}  options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};