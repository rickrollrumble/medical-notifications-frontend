/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { Home } from 'components/Home';
import React from 'react';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Home />
    </NavigationContainer>
  );
}

export default App;
