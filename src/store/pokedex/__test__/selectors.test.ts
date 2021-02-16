import * as selectors from "../selectors";

describe("Pokedex selectors", () => {
  it("returns pokedex slice", () => {
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

    const state = {
      pokedex: {
        pokemon: initialPokedex,
      },
    };

    expect(selectors.pokedexSlice(state)).toEqual({
      pokemon: initialPokedex,
    });
  });

  it("returns pokedex list", () => {
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

    const state = {
      pokedex: {
        pokemon: initialPokedex,
      },
    };

    expect(selectors.pokedexList(state)).toEqual(initialPokedex);
  });

  it("returns pokedex counter when there are pokemon", () => {
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

    const state = {
      pokedex: {
        pokemon: initialPokedex,
      },
    };

    expect(selectors.pokedexCounter(state)).toEqual(2);
  });

  it("returns pokedex counter when there aren't pokemon", () => {
    const emptyState = {
      pokedex: {
        pokemon: [],
      },
    };

    const nullState = {
      pokedex: {
        pokemon: null,
      },
    };

    expect(selectors.pokedexCounter(emptyState)).toEqual(0);
    expect(selectors.pokedexCounter(nullState)).toEqual(0);
  });
});
