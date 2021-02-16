export interface PokemonPokedex {
  name: string;
  id: number;
  image: string;
}

export interface PokedexState {
  pokemon: PokemonPokedex[];
}
