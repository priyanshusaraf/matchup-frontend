import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import Profile from '../components/Profile';
import Bookings from '../components/Bookings';
import MyBookings from '../components/MyBookings';
import BookTurf from '../components/BookTurf';
import SelectDateTime from '../components/SelectDateTime';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === 'Bookings') iconName = 'book';
        else if (route.name === 'Profile') iconName = 'person';
        else if (route.name === 'MyBookings') iconName = 'history';
        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#8FCB81',
      tabBarInactiveTintColor: '#7d7d7d',
      headerShown: false,
    })}
  >
    <Tab.Screen name="Bookings" component={Bookings} />
    <Tab.Screen name="MyBookings" component={MyBookings} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="BookTurf" component={BookTurf} />
      <Stack.Screen name="SelectDateTime" component={SelectDateTime} />
      <Tab.Screen name="MyBookings" component={MyBookings} />
      <Stack.Screen name="Main" component={TabNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
