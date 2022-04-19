//Const
const pokemonList = document.querySelector('.pokemonList');
const label = document.querySelector('#label');

//Export
export const deepScreen = document.querySelector('.deepScreen');

//Funcion que evita que se repitan los elementos del array, es la razon de por que hice un doble fetch (linea 28)
Array.prototype.unique=function(a){
    return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
});

export const pokeLocalStorage = (pokemonArray) =>{
    let newPokemonArray = pokemonArray.unique()

    localStorage.setItem('Pokemon', JSON.stringify(newPokemonArray));


    getPokemon()
}

export const getPokemon = () =>{
    const get = JSON.parse(localStorage.getItem('Pokemon'));
    
    pokemonList.innerHTML = ""

    get.map((name, i) =>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
           .then( data => {
               data.json()
   
               .then(transformData =>{
   
                   const name = transformData.name;
                   const img = transformData.sprites.front_default;
                   
                   const twice = { name, img, i };
                   
                   printPokemonList(twice)    
               })
           })
       })
}

const printPokemonList = (twice) =>{
    label.innerHTML = "You looked for:"
    pokemonList.innerHTML += `
    <li class="eachOther">
        <p>${twice.name}</p>
        <button class="deletePoke" onclick="deletePoke(${twice.i})">
            <i class="fas fa-trash-alt"></i>
        </button>
        <img src="${twice.img}" alt="poke">
    </li>
    `
}


