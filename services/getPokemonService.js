const baseUrl = "https://pokeapi.co/api/v2";

// Base function for API requests
// A UTIL function
async function makeAPIRequest(endpoint) {
  try {
    const response = await axios.get(endpoint);
    const data = await response.data;

    return {
      success: true,
      data
    };
  } catch (error) {
    return {
      success: false,
      error
    };
  }
}

// Specific functions using the base function
async function getPokemonAPI(pokemonName) {
  const endpoint = `${baseUrl}/pokemon/${pokemonName}`;
  return makeAPIRequest(endpoint);
}

async function getAbilitiesAPI() {
  const endpoint = `${baseUrl}/ability`;
  return makeAPIRequest(endpoint);
}

async function getItemAPI(itemId) {
  const endpoint = `${baseUrl}/item/${itemId}`;
  return makeAPIRequest(endpoint);
}

export { getPokemonAPI, getAbilitiesAPI, getItemAPI };
