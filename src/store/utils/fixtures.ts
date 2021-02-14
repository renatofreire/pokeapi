export const pokemonMock = {
  name: "charizard",
  id: 6,
  image:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
  weight: 905,
  height: 17,
  types: [
    {
      name: "fire",
      url: "https://pokeapi.co/api/v2/type/10/",
    },
    {
      name: "flying",
      url: "https://pokeapi.co/api/v2/type/3/",
    },
  ],
  abilities: [
    {
      name: "blaze",
      url: "https://pokeapi.co/api/v2/ability/66/",
    },
    {
      name: "solar-power",
      url: "https://pokeapi.co/api/v2/ability/94/",
    },
  ],
  stats: {
    hp: 70,
    attack: 80,
    defense: 50,
    "special-attack": 35,
    "special-defense": 35,
    speed: 35,
  },
  species: {
    name: "charizard",
    url: "https://pokeapi.co/api/v2/pokemon-species/6/",
  },
};
