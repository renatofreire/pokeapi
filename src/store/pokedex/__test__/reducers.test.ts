import reducer from "../reducer";
import actions from "../actions";

describe("Pokedex Reducer", () => {
  it("adds a new pokemon when save action is called", () => {
    const initialPokedex = [
      {
        name: "wigglytuff",
        id: 40,
        image: "some-image",
      },
      {
        name: "poliwag",
        id: 60,
        image: "some-image",
      },
    ];

    const pokemonToSave = {
      name: "diglett",
      id: 50,
      image: "some-image",
    };

    const currentState = reducer(
      { pokemon: initialPokedex },
      actions.pokedexSavePokemon(pokemonToSave)
    );

    const expectedState = {
      pokemon: [...initialPokedex, pokemonToSave],
    };

    expect(currentState).toEqual(expectedState);
  });

  it("does not add a new pokemon when the pokemon is already saved", () => {
    const initialPokedex = [
      {
        name: "wigglytuff",
        id: 40,
        image: "some-image",
      },
      {
        name: "diglett",
        id: 50,
        image: "some-image",
      },
      {
        name: "poliwag",
        id: 60,
        image: "some-image",
      },
    ];
    const pokemonToSave = {
      name: "diglett",
      id: 50,
      image: "some-image",
    };

    const currentState = reducer(
      { pokemon: initialPokedex },
      actions.pokedexSavePokemon(pokemonToSave)
    );

    const expectedState = {
      pokemon: initialPokedex,
    };

    expect(currentState).toEqual(expectedState);
  });

  it("removes pokemon when remove action is called", () => {
    const initialPokedex = [
      {
        name: "diglett",
        id: 50,
        image: "some-image",
      },
      {
        name: "poliwag",
        id: 60,
        image: "some-image",
      },
    ];

    const pokemonToRemove = {
      name: "diglett",
      id: 50,
      image: "some-image",
    };

    const currentState = reducer(
      { pokemon: initialPokedex },
      actions.pokedexRemovePokemon(pokemonToRemove)
    );

    const expectedState = {
      pokemon: [
        {
          name: "poliwag",
          id: 60,
          image: "some-image",
        },
      ],
    };

    expect(currentState).toEqual(expectedState);
  });

  it("does not change state if pokemon to remove is not in pokedex", () => {
    const initialPokedex = [
      {
        name: "diglett",
        id: 50,
        image: "some-image",
      },
      {
        name: "poliwag",
        id: 60,
        image: "some-image",
      },
    ];

    const pokemonToRemove = {
      name: "wigglytuff",
      id: 40,
      image: "some-image",
    };

    const currentState = reducer(
      { pokemon: initialPokedex },
      actions.pokedexRemovePokemon(pokemonToRemove)
    );

    const expectedState = {
      pokemon: initialPokedex,
    };

    expect(currentState).toEqual(expectedState);
  });
});
