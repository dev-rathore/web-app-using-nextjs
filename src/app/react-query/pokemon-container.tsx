import React from "react";
import PokemonCard from "./pokemon-card";
import { Pokemon } from "./react-query-explanation";

interface PokemonContainerProps {
  pokemons: Pokemon[];
}

const PokemonContainer: React.FC<PokemonContainerProps> = ({
  pokemons,
}) => (
  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {pokemons.map((pokemon, index) => (
      <PokemonCard
        imageUrl={pokemon.imageUrl}
        key={index}
        title={pokemon.name}
      />
    ))}
  </div>
);

export default PokemonContainer;
