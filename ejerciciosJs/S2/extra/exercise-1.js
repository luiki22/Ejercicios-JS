const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]


 
let newArray = [];

for(const movie of movies){
    for(key in movie.categories){

        if(!newArray.includes('comedia')){
            newArray.push('comedia')
        }

        if(!newArray.includes('aventura')){
            newArray.push('aventura');
        }

        if(!newArray.includes('acción')){
            newArray.push('acción');
        }
        if(!newArray.includes('thriller')){
            newArray.push('thriller');
        }
        if(!newArray.includes('animación')){
            newArray.push('animación');
        }
 
    }
    
}

console.log(newArray)


