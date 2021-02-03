//import pokemon from "./data/pokemon/pokemon.js";
import data from "./data/pokemon/pokemon.js";
import {PokemonCard,showPokemons,filterByType} from "./data.js"


let tarjetas = document.getElementById("tarjetas")
let tarjets="";
const tipo=document.getElementById("tipo");
const poder = document.getElementById("poder");
const aparicion = document.getElementById("aparicion");
const formulario= document.getElementById("formulario");
const busqueda= document.getElementById("busqueda");

//search

const datosUsuario= data.pokemon.forEach(e => {
    formulario.addEventListener("keyup" , (e) => {
       e.preventDefault;

       let letra= busqueda.value.toLowerCase();
       console.log(letra);

       const pokemonsFiltrados = data.pokemon.filter(item => {
           const api = item.name.toLowerCase();
           return api.indexOf(letra) !== -1
       })
       
       showPokemons(pokemonsFiltrados)
   })
});

//Filtrado por tipo

const pokemonType= data.pokemon.forEach(e=>{
    tipo.addEventListener( "click" , e =>{
    let filtradoTipo = e.target.value;
     let filterType =filterByType(filtradoTipo)   
     showPokemons(filterType) 
    })   
})


    // mas poderosos


const poderpokemon = data.pokemon.forEach(e => {
    poder.addEventListener("click", (e) => {
        const maxHp= data.pokemon.sort((prev,next)=>{

    return next.stats["max-cp"] - prev.stats["max-cp"]
    
   })
   showPokemons(maxHp)
    })
});

   
 
// Orden de Aparición 

const ordenapa = data.pokemon.forEach(e => {
    aparicion.addEventListener("click", (e) => {
       const encuentro = data.pokemon.sort((prev,next) => {

    return next.encounter["base-capture-rate"] - prev.encounter["base-capture-rate"]
    
   })
   showPokemons(encuentro) 
    })
});

let evoluciones = data.pokemon;
// console.log(evoluciones);
evoluciones.forEach(e => {
 e.evolution["next-evolution"] ? console.log(e.evolution["next-evolution"][0]["name"]) : 
e.evolution["prev-evolution"] ? console.log(e.evolution["prev-evolution"][0]["name"]) : 
console.log("No tiene evolución")})





 






