const body = document.querySelector('body');
const pokemonsList = document.getElementById('pokemon-list');

// API DOCS - https://pokeapi.co/

console.log('ASYNC AWAIT EXAMPLE');

const loadPokemons = async () => {
  try {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=50'); // Asynchronous operation - must be awaited

    console.log('response', response);
    const data = await response.json(); // Asynchronous operation - must be awaited

    console.log('DATA  ', data);
    data.results.forEach((pokemon, index) => {
      const listItem = document.createElement('li');
      const name = document.createTextNode(`${index + 1} - ${pokemon.name}`);

      listItem.appendChild(name);
      pokemonsList.appendChild(listItem);

      listItem.addEventListener('click', event => {
        selectPokemon(event.target);
      });
    });
  } catch (error) {
    console.error('Error fetching the Pokemons', error);
  }
};

const selectPokemon = listItem => {
  const pokemonIndex = Number.parseInt(listItem.innerHTML);
  let nameOfSelected = document.getElementById('name');
  const imageOfSelected = document.getElementById('selected-image');
  
  //Each Pokemon's ability needs to be listed.
  const poke_abilities=pokemon.abilities.map(ability=>ability.ability.name);
  console.log(poke_abilities[0]);
  
  //Display the pokemon's moves
  const moves =pokemon.moves.map(move=>move.name);
  console.log(moves[0]);
  
  //Also display the weight of each pokemon
  const weight=pokemon.weight;
  console.log(weight);

  nameOfSelected.innerHTML = listItem.innerHTML.toUpperCase();
  nameOfSelected.style.visibility = 'visible';
  nameOfSelected.style.display = 'visible';
  imageOfSelected.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;
};

loadPokemons();
