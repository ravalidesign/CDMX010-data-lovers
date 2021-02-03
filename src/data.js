import data from "./data/pokemon/pokemon.js";

export const PokemonCard = (pokemon) => {
    return `
    <div class="flip-container">
    <div class="flipper">
    <div class="card">

    <div class="cabecera">
    <h4>${pokemon.num}</h4>
    <p></p>
    <h2>${pokemon.name}</h2>
    </div>

    <div class="card-container">
        <img src="${pokemon.img}" alt="" aling="left" class="img-fluid">
        <div class="tipo">
        <h3>Tipo: </h3>
        <p>${pokemon.type}</p>
        <h3> size: </h3>
        <p>${pokemon.size.height}</p>
        <p>${pokemon.size.weight}</p>
        </div>
        <h3>Acerca de:</h3>
        <p> ${pokemon.about}</p> 
        </div>

    </div>

    <div class="back">
    <div class="card-back-container">
    <div class="cabecera">
    <h4>${pokemon.num}</h4>
    <p></p>
    <h2>${pokemon.name}</h2>
    </div>
    <div class="card-container">
    <div class:"size">
    
    <div class"resdeb">
    <h3> resistant </h3>
        <p> ${pokemon.resistant}</p>
    <h3> weaknesses </h3>
        <p> ${pokemon.weaknesses}</p>
    </div>
   
    <h3> stats </h3>
        <p>base-attack <p>
        <p> ${pokemon.stats["base-attack"]}</p>
        <p>base-defense <p>
        <p> ${pokemon.stats["base-defense"]}</p>
        <p>base-stamina <p>
        <p> ${pokemon.stats["base-stamina"]}</p>
        <p>max-cp<p>
        <p> ${pokemon.stats["max-cp"]}</p>
        <p>max-hp<p>
        <p> ${pokemon.stats["max-hp"]}</p>

    <h3> evolution </h3>
        <p> ${pokemon.evolution["next-evolution"] ? pokemon.evolution["next-evolution"][0]["name"] : 
        pokemon.evolution["prev-evolution"] ? pokemon.evolution["prev-evolution"][0]["name"] : 
        "No tiene evolución"} </p>
        


        </div> 
    </div>
   </div>
        
    </div>
    </div>
    </div>
    `
}


// función para mostrar tarjetas

export const showPokemons = (pokemons) => {
    let pokemonsCards = ''

    pokemons.forEach(pokemon => {
        pokemonsCards += PokemonCard(pokemon)
     })

     tarjetas.innerHTML = pokemonsCards;
}
showPokemons(data.pokemon)





// función de filtro
export const filterByType=(type)=>{
    const filterType=data.pokemon.filter(poke =>{
        return poke.type.includes(type)
    })
       return filterType;
    }