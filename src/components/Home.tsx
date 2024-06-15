/* eslint-disable react/no-unstable-nested-components */
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import { Profile } from './tabs/Profile/Profile';
import { Schedule } from './tabs/Schedule/Schedule';
import { Settings } from './tabs/Settings/Settings';
import { Weather } from './tabs/Weather/Weather';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

export function Home() {
    return <Tab.Navigator labeled={false} initialRouteName="Schedule">
        <Tab.Screen name="Profile" component={Profile} options={{
            tabBarAccessibilityLabel:'Profile',
            tabBarIcon: ({ color }) => <MaterialCommunityIcons name={'account-circle'} color={color} size={26} />,
        }} />
        <Tab.Screen name="Schedule" component={Schedule} options={{
            tabBarAccessibilityLabel:'Schedule',
            tabBarIcon: ({ color }) => <MaterialCommunityIcons name={'calendar-clock'} color={color} size={26} />,
        }} />
        <Tab.Screen name="Weather" component={Weather} options={{
            tabBarAccessibilityLabel:'Weather',
            tabBarIcon: ({ color }) => <MaterialCommunityIcons name={'weather-sunny'} color={color} size={26} />,
        }} />
        <Tab.Screen name="Settings" component={Settings} options={{
            tabBarAccessibilityLabel:'Settings',
            tabBarIcon: ({ color }) => <MaterialCommunityIcons name={'cog'} color={color} size={26} />,
        }} />
    </Tab.Navigator>;
}
