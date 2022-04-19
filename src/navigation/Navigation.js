import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AccountScreen from '../screens/Account';
import PokedexScreen from '../screens/Pokedex';
import FavoriteScreen from '../screens/Favorite';
import PokedexNavigation from './PokedexNavigation';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator initialRouteName="Pokedex">
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarLabel: 'Favoritos',
          title: 'Favoritos',
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={PokedexNavigation}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => renderPokeball(),
        }}
      />
      <Tab.Screen
        name="Acount"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Mi Cuenta',
          title: 'Mi cuenta',
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function renderPokeball() {
  return (
    <Image
      source={require('../assets/pokeball.png')}
      style={{ width: 60, height: 60, top: 0 }}
    />
  );
}
