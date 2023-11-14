// En base al ejercicio anterior. Crea dinamicamente un elemento <p> por cada petición a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.

// EJ: El nombre Abel tiene un 22 porciento de ser de ET y un 6 porciento de ser de MZ.


const baseUrl = 'https://api.nationalize.io?name=';


const button$$ = document.querySelector('button');
button$$.addEventListener('click', consultaApi);


async function consultaApi(){

  const input$$ = document.querySelector('input');
  const value = input$$.value;
  const response =  await fetch (baseUrl + value);
  const json =  await response.json();
//   return json;
  console.log(json)
  createElements(json);
}

function createElements(data){
    for(const country of data.country){
        const p$$ = document.createElement('p');
        const percentage = country.probability * 100;
        p$$.textContent ='El nombre ' + data.name + ' tiene un ' + percentage + ' porciento de ser de ' + country.country_id;
        document.body.appendChild(p$$);
    }
    
}
   