'use client';

import React, { useState } from "react";
import {
  QueryClient,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import PokemonContainer from "./pokemon-container";
import Loader from "@/components/loader";
import { toast } from "react-toastify";
import Input from "@/components/input";
import { Button } from "@/components/ui/button";

// Mutation - Data Creation, Data Updation, Data Deletion

const createPokemon = (newPokemon: string) => {
  return () => fetch("https://pokeapi.co/api/v2/pokemon", {
    method: "POST",
    body: JSON.stringify(newPokemon),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}

export type Pokemon = {
  name: string;
  imageUrl: string;
};

const ReactQueryExplanation: React.FC = () => {
  const [text, setText] = useState("");
  const queryClient = new QueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ['pokemons'],
    queryFn: async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const allpokemon = await response.json();
      const fetchPokemonData = async (pokemon: {name: string, url: string}) => {
        const response = await fetch(pokemon.url);
        const pokemonData = await response.json();
        return {
          name: pokemonData.name,
          imageUrl: pokemonData.sprites.other.dream_world.front_default,
        };
      }
      const allPokemons: Pokemon[] = await Promise.all(allpokemon.results.map((
        pokemon: {name: string, url: string},
      ) => fetchPokemonData(pokemon)));
      // toast.success("Data fetched successfully!");
      return allPokemons;
    },
  });

  const postMutation = useMutation({
    mutationFn: createPokemon(text),
    onSuccess: () => {
      toast.success("New Pokemon added!");
      queryClient.invalidateQueries({ queryKey: ['pokemons']});
    },
    onError: () => {
      toast.error("Failed to add new Pokemon!");
    },
  });

  return (
    <>
      <div className="text-center text-3xl font-semibold pt-6">React Query</div>
      <div className="flex justify-center px-4 py-2 md:px-10 md:py-6">
        <div className="flex gap-2">
          <div className="grow">
            <Input
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter Pokemon Name"
              type="text"
              value={text}
            />
          </div>
          <div className="min-w-32">
            <Button onClick={() => postMutation.mutate()}>Add Pokemon</Button>
          </div>
        </div>
      </div>
      <div className="px-4 py-2 md:py-10 md:px-20">
        {isLoading ? <Loader height="min-h-screen-3/4"/> : (data && <PokemonContainer pokemons={data} />)}
      </div>
    </>
  );
};

export default ReactQueryExplanation;
