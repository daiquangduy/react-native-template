import React from 'react';
import { StatusBar, Platform, UIManager } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import Home from '../screens/home';

const Stack = createStackNavigator();

if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const AppNavigator = () => {
    return (
        <NavigationContainer
           
        >
            <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
            <Stack.Navigator
                screenOptions={{
                    gestureEnabled: true,
                    headerShown: false,
                    ...TransitionPresets.SlideFromRightIOS
                }}
            >

                <Stack.Screen name="Splash" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;