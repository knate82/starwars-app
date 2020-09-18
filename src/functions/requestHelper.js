const axios = require('axios');
const baseUrl = 'http://swapi.dev/api/people/?search=';

const callSwapi = async function (url) {
  // makes actual call to swapi
  try {
    return await axios.get(url);
  } catch (error) {
    console.log(`Oops!  Couldn't find ${url} Error: ${error}`);
  }
}

export default async function RequestHelper(term) {
  // Perform the get request from star wars api
  try {
    // If there are no returned characters we will maintain an empty character object
    let characterInfo = {};
    // get initial character info
    let response = await callSwapi(`${baseUrl}${term}`);

    if (response.data && response.data.results && response.data.results.length > 0) {
      // Always taking the first response in the array, time limitations dictate that I can't be as thorough with searching as I'd like...
      characterInfo = response.data.results[0];
      try {
        let homeWorld = await callSwapi(characterInfo.homeworld);
        characterInfo.homeWorld = homeWorld.data.name;
      } catch (error) {
        console.log('Homeworld not found.');
        characterInfo.homeWorld = 'Not Found';
      }
    }
    return characterInfo;
  } catch (error) {
    // For my information if anything goes wrong with the request
    // Not sure why this is here because I can get a 404 resonse from the associated ajax and still not hit this catch block.
    error.message = 'Charcter Not Found';
    error.detail = 'SWAPI is a vast, but limited Star Wars database.';
    console.log(`Error in swapi request: ${error}`);
    return error;
  }
}