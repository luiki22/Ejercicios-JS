// Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando fetch() 
// para hacer una consulta a la api cuando se haga click en el botón, pasando como parametro de la api, el valor del input.

const button$$ = document.querySelector('button');
button$$.addEventListener('button', consultaApi);


function consultaApi(){
    fetch('https://api.nationalize.io?name=')
    .then((response) => {
    return response.json();
  })
    .then((myJson) => {
    console.log(myJson);
  });
}