import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PokedexScreen from '../screens/Pokedex';
import PokemonScreen from '../screens/Pokemon';

const Stack = createStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokedex"
        component={PokedexScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={{ headerShown: true, title: '', headerTransparent: true }}
      />
    </Stack.Navigator>
  );
}
