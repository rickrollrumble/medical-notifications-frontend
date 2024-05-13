import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from 'styles';
import { Profile } from './tabs/Profile/Profile';
import { Schedule } from './tabs/Schedule';



const HomeScreen = ({navigation}: {navigation: any}) => <View>
    <Text>Hello World</Text>
    <View style={styles.button}>
        <Button
            title="Go to Schedule"
            onPress={() => navigation.navigate('Schedule')}
        />
    </View>
    <View style={styles.button}>
        <Button
            title="Go to Profile"
            onPress={() => navigation.navigate('Profile')}
        />
    </View>
</View>;

const Stack = createNativeStackNavigator();


export function Home() {
    return <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Schedule" component={Schedule}/>
        <Stack.Screen name="Profile" component={Profile}/>
    </Stack.Navigator>;
}
