async function fetchPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20');
    const data = await response.json();
    const pokemonContainer = document.getElementById('pokemon-container');

    // Clear the container first
    pokemonContainer.innerHTML = '';

    for (const [index, pokemon] of data.results.entries()) {
        const pokemonData = await fetch(pokemon.url);
        const pokemonDetail = await pokemonData.json();
        
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${pokemonDetail.sprites.front_default}" alt="${pokemonDetail.name}">
            <h3>${pokemonDetail.name}</h3>
            <p>Types: ${pokemonDetail.types.map(type => type.type.name).join(', ')}</p>
            <button class="btn" onclick="viewDetails(${index + 1})">View Details</button>
        `;

        pokemonContainer.appendChild(card);
    }
}

function viewDetails(id) {
    window.location.href = `pokemon-details.html?id=${id}`;
}

fetchPokemon();
fetchPokemonDetails();

