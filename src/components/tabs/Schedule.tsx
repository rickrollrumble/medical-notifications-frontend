import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from 'styles';

export function Schedule({navigation}:{navigation:any}): React.JSX.Element {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.button}>
        <Button title="Back to Home" onPress={()=>navigation.goBack()}/>
      </View>
      <Button title="Go to Schedule again" onPress={()=>navigation.push('Schedule')} />
      <Text>Schedule</Text>
    </View>
  );
}
