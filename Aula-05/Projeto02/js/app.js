// "characters": "https://rickandmortyapi.com/api/character",
// "locations": "https://rickandmortyapi.com/api/location",
// "episodes": "https://rickandmortyapi.com/api/episodes",

const page = 4
const baseUrl = 'https://rickandmortyapi.com/api'

const loadCharacter = async() => {
  const response = await fetch(`${baseUrl}/character?page=${page}`)
  const data = ( await response).json()
  const limitData = data.results.slice(3, 9);
  return {results: limitData}

};

const loadLocation = async ()=> {
  const response = await fetch(` ${baseUrl}/location`)
  const data = await response.json()
  const limitData = data.results.slice(0, 10);
  return { results: limitData};
};

const loadEpisode = async () => {
  const response = await fetch(`${baseUrl}/episode`)
  const data = await response.json()
  return {results: limitData};

};

const loadAllWithPromiseAll = async () => {
  const [character, location, episode] = await Promise.all([
    loadCharacter(),
    loadLocation(),
    loadEpisode(),
  ])
}

loadAllWithPromiseAll()

const showCharacter = (character) => {
  const charactercontainer = document.getElementById('character-container')
  character.map( (character) => {
    const divCharacter = document.createComment('div')
    divCharacter.id = `character-${character.id}`
    divCharacter.innerHTML = `
    <img id="img-character" src=${character.image} alt="image character>
    <article class="character-info">
      <h3>${character.name}</h3>
        <span class="${character.status}"> ${character.status} - ${character.species}</span>

      <span class= "location">Location:</span>
      <a class="character.link"> ${character.location.url} - ${character.location.name} </a>
    </article>`

    charactercontainer.appendChild(divCharacter)
  })
}
