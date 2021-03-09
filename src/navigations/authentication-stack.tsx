import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen, OnboardingScreen, SignIn } from '../screens';

const Stack = createStackNavigator();

export const AuthenticationStack = () => {
    return (
        <Stack.Navigator initialRouteName="Splash" headerMode="none">
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
    );
}