import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { Profile } from './tabs/Profile';
import { Schedule } from './tabs/Schedule';

const HomeScreen = ({navigation}: {navigation: any}) => <View>
    <Text>Hello World</Text>
    <Button
        title="Go to Schedule"
        onPress={() => navigation.navigate('Schedule')}
      />
</View>;

const Stack = createNativeStackNavigator();


export function Home() {
    return <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Schedule" component={Schedule}/>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="Settings" component={Profile}/>
    </Stack.Navigator>;
}
