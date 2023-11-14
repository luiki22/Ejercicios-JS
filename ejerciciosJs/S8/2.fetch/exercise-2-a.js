// Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando fetch() 
// para hacer una consulta a la api cuando se haga click en el botón, pasando como parametro de la api, el valor del input.


const baseUrl = 'https://api.nationalize.io?name=';


const button$$ = document.querySelector('button');
button$$.addEventListener('click', consultaApi);


async function consultaApi(){

  const input$$ = document.querySelector('input');
  const value = input$$.value;
  const response =  await fetch (baseUrl + value);
  const json =  await response.json();
  return json;
  // console.log(json)

}