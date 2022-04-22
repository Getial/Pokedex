import React from 'react';
import { View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getPokemonsFavoriteApi } from '../api/favorite';

const Favorite = () => {
  const checkFavorite = async () => {
    const response = await getPokemonsFavoriteApi();
    console.log(response);
  };
  return (
    <SafeAreaView>
      <Text>Favorite</Text>
      <Button title="Obtener" onPress={checkFavorite} />
    </SafeAreaView>
  );
};

export default Favorite;
