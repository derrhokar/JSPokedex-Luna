import {firstScreen, addPokemon, handleToggle} from './app.js'
import {getPokemon} from './localStorage.js'
const form = document.querySelector('#form');
const left_btn = document.querySelector('.clickeablePad-left');
const right_btn = document.querySelector('.clickeablePad-right');

firstScreen.innerHTML = `
    <p class="error">
        write a pokemon down below
    </p>
`

//DOM events

left_btn.addEventListener('click', () =>{
    handleToggle()
})

right_btn.addEventListener('click', () =>{
    handleToggle()
})

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    addPokemon()
})

window.addEventListener('DOMContentLoaded', getPokemon())

