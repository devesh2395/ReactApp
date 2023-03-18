import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import Start from './src/Start';
import Phone from './src/Phone';
import Truecaller from './src/Truecaller';
import OTP from './src/OTP';
import Details from './src/Details';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Phone" component={Phone} />
        <Stack.Screen name="Truecaller" component={Truecaller} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;