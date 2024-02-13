import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Login from './screens/Login.jsx';
import Register from './screens/Register.jsx';
import Home from './screens/Home.jsx';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer >
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Login'>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name ="Register" component={Register} />
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App