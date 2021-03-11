import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// pages
import start from './src/screens/start';
import home from './src/screens/home';

const Stack = createStackNavigator() ;

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator
				initialRouteName={'Start'}
				screenOptions={{
					headerShown: false
				}}
			>
				<Stack.Screen name={'start'} component={start} />
				<Stack.Screen name={'home'} component={home} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
