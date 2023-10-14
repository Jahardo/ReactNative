import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PostScreen from "../screens/PostScreen";
import Posts from "../screens/Posts";

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="home">
                <Stack.Screen
                    name="home"
                    component={Posts}
                />
                <Stack.Screen name="Profile" component={PostScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};