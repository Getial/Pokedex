import React, { useState, useCallback } from 'react';
import {  Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import { getPokemonsFavoriteApi } from '../api/favorite';
import { getPokemonDetailsApi } from '../api/pokemon';
import useAuth from '../hooks/useAuth';
import PokemonList from '../components/PokemonList';

const Favorite = () => {
  const [pokemons, setPokemons] = useState([]);
  const { auth } = useAuth();
  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const response = await getPokemonsFavoriteApi();

          const pokemonsArray = [];

          for await (id of response) {
            const pokemonDetails = await getPokemonDetailsApi(id);

            pokemonsArray.push({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              type: pokemonDetails.types[0].type.name,
              order: pokemonDetails.order,
              image:
                pokemonDetails.sprites.other['official-artwork'].front_default,
            });
          }

          setPokemons(pokemonsArray);
        })();
      }
    }, [auth])
  )

  return !auth ? (
    <SafeAreaView>
      <Text>Usuario no logeado</Text>
    </SafeAreaView>
  ) : (
    <SafeAreaView>
      <PokemonList pokemons={pokemons} />
    </SafeAreaView>
  );
};

export default Favorite;
