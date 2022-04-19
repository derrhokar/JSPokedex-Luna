****INDEX.JS****
    Contiene solo eventos del DOM, el cual solo dipara la funcion addPokemon


****CLASS.JS****
    Es el modelo de datos utilizado para organizar los datos del pokemon en cuestion


****APP.JS****
    Contiene las funciones basicas de la aplicacion:
        -addPokemon: Ejecuta un fetch a la pokeAPI:
                    en el primer fetch, antes de transformar los datos ejecuta notFoundPokemon() que es un manejador de errores. 
                    Luego de transformar los datos, en la segunda promesa, organiza los datos que interesan en constantes. 
                     
                     A continuacion se invocan dos funciones:

                     *Todos los elementos son encerrados en una constante "all".
                        -"all" es pasado como parametro para la funcion de pokemonData
                     *A pokemonArray() se le hace push del nombre del pokemon pasado por el fetch (pokemonArray)

        -handleToggle: Utiliza un contador para evaluar el estado del contador, su valor por defecto es 1.
                       Si el contador es igual a 1 va a ocultar la primera pantalla en el momento del click
                       y cambia el valor del contador global 0 y en ese caso hace lo contrario.
        
        -notFoundPokemon: Recibe el parametro de error analiza el status del objeto que trae el fetch y devuelve
                          un error en caso de que el status sea diferente a 200
        
        -pokemonData: recibe el objeto all y hace un fetch del endpoint que quedo sin resolver en addPokemon
                      devuelve la location del pokemon en cuestion. Luego hace una instancia del objeto Pokemon pasandole los datos.
        
        -setExp: recibe el parametro de la experiencia del pokemon (vease linea: 129) y evalua si el valor es mayor a 100 y en ese caso retorna 100.
                 Esto tiene un fin estetico, la barra de exp esta en porcentaje, si el porcentaje es mayor a 100 sale del contenedor padre.

        -printPokemon: Recibe el objeto de Pokemon como parametro y lo pinta en pantalla 


****LOCALSTORAGE.JS****
    -unique: evita de que se repitan los elementos del array (linea: 9).

    -pokeLocalStorage: 
                        *Recibe el array de pokemon (app.js linea: 42) y ejecuta unique().
                        *Sube el array al localStorage 
                        *Activa la funcion getPokemon()
    
    -getPokemon: 
                    *GET Obtiene los datos del localStorage
                    *Limpia la lista para que no se reptitan los elementos
                    *se hace un mapeo y se obtiene el nombre y el indice.
                    *Encierra los datos en constantes y se lo pasa a printPokemonList.
    
    -printPokemonList: recibe los parametros de la funcion anterior y los pinta en pantalla

****INDEX.HTML (linea: 72)****
    ACLARACION: por alguna razon tira todo tipo de errores si hago la funcion de eliminar de 
                la lista dentro de un archivo js, esta fue la unica forma de que funcione, aunque quede feo.

                *Se le pasa el indice
                *Obtiene los datos del localStorage
                *elimina en base al indice pasado
                *sobrescribe el localStorage para que se actualize


Errores: al estar en el html no puedo volver a utilizar ninguna funcion de un archivo js
         por ende no puedo llamar a getPokemon() para refrescar la lista.

              