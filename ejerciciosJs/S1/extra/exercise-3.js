const movies = [{name: "Your Name", durationInMinutes: 130},
{name: "Pesadilla antes de navidad", durationInMinutes: 225}, 
{name: "Origen", durationInMinutes: 165}, 
{name: "El señor de los anillos", durationInMinutes: 967}, 
{name: "Solo en casa", durationInMinutes: 214}, 
{name: "El jardin de las palabras", durationInMinutes: 40}];





for( let i = 0; i < movies.length;i++){
        
    if (movies[i].durationInMinutes < 100){
        
        
        console.log(movies[i].name, ': ', 'Pelicula pequeña');
    } 
    
         
    if (movies[i].durationInMinutes >= 100 && movies[i].durationInMinutes < 200){
        
        
        console.log(movies[i].name, ': ', 'Pelicula mediana');
    } 
    
    
    if (movies[i].durationInMinutes > 200) {
        console.log(movies[i].name, ': ', 'Pelicula grande');
    }

}