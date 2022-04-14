import React from 'react';
import {
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Platform,
} from 'react-native';
import PokemonCard from './PokemonCard';

const PokemonList = (props) => {
  const { pokemons, loadPokemons, isNext } = props;

  const loadMore = () => {
    loadPokemons();
  };

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatlistContainer}
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && (
          <ActivityIndicator
            size="large"
            style={styles.spinner}
            color="#AEAEAE"
          />
        )
      }
    />
  );
};

export default PokemonList;

const styles = StyleSheet.create({
  flatlistContainer: {
    paddingHorizontal: 15,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
});
