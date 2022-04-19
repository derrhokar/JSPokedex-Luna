//Imports
import Pokemon from './class.js';
import {pokeLocalStorage} from './localStorage.js';
import {deepScreen} from './localStorage.js';


//Variables
let pokemonArray = []

//Se utiliza como contador del toogle (linea 51)
let contador = 1;

//Exports
export const firstScreen = document.querySelector('.screen');


export const addPokemon = () => {
    let value = document.querySelector('#pokemon').value.toLowerCase();

    fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
        .then( data =>{
            
            notFoundPokemon(data)

            data.json()
            .then(transformData =>{
                const name = transformData.name;
                const attack1 = transformData.abilities[0].ability.name;
                const attack2 = transformData.abilities[1].ability.name;
                const type = transformData.types[0].type.name;
                const weight = transformData.weight;
                const exp = transformData.base_experience;
                const img = transformData.sprites.front_default;
                const id = transformData.id;


                const all = {name, attack1, attack2, type, weight, exp, img, id}

                pokemonData(all);

                pokemonArray.push(name)
                pokeLocalStorage(pokemonArray)
                
           }).catch(err => notFoundPokemon(err))
        })
    
    form.reset();
}

export const handleToggle = () => {
    if(contador == 1){
        firstScreen.style.display = "none";
        deepScreen.style.display = "inherit";

        contador = 0
    }else{
        firstScreen.style.display = "inherit";
        deepScreen.style.display = "none";
        contador = 1; 
    }
}

//Arrow Func

const notFoundPokemon = (error) =>{
    if(error.status !== 200){
         firstScreen.innerHTML = `
        <p class="error">Error type: "${error.status}"[pokemon not found]</p> `
    }


}

const pokemonData = (pokeData) =>{
    
    fetch(`https://pokeapi.co/api/v2/location/${pokeData.id}/`)
        .then( response =>{
            response.json()
            .then(location => {
                const currentLocation = location.areas[0].name.replace(/-/g, " ");

                 let NewPokemon = new Pokemon(pokeData.name, pokeData.attack1, pokeData.attack2, pokeData.type, pokeData.weight, pokeData.exp, pokeData.img, currentLocation );
                 printPokemon(NewPokemon);
            })

    });

}


//Setea el width para que solo vaya del 0 a 100, de esa manera no sale de su contenedor. REF: linea 127

const setExp = (exp) =>{
    if(exp > 100){
        return 100
    }
}

const printPokemon = (pokemon) =>{

    firstScreen.innerHTML = `
            <h3>${pokemon.name}</h3>
            <div class="img">
            <img src="${pokemon.img}" alt="${pokemon.name}">
            </div>
            <div class="abilities">
                <p class="text-skills">
                    Attacks/abilities
                </p>
                <ul>
                    <li>
                        <p>
                            ${pokemon.attack1}
                        </p>
                    </li>
                    <li>
                        <p>
                        ${pokemon.attack2}
                        </p>
                    </li>
                </ul>
            </div>
            <div class="type">
                <span>Type: ${pokemon.type}</span>
            </div>
            <div class="exp">
                <span>Base exp: ${pokemon.exp}</span>
                <div class="stats">
                    <div class="bar" style="width: ${setExp(pokemon.exp)}%"></div>
                </div>
            </div>
            <div class="currentLocation">
                <p>Current location:</p>
                <p>${pokemon.location}</p>
            </div>
    `
}
