const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]



let newArray = [];


for( const user of users){
    
    for(key in user.favoritesSounds){

        if(key === 'waves'){
            
            newArray.push('waves');
        }
        if(key === 'rain'){

            
            newArray.push('rain');
    
        }

        if(key === 'firecamp'){

            
            newArray.push('firecamp');
    
        }

        if(key === 'shower'){

            
            newArray.push('shower');
    
        }

        if(key === 'train'){

            
            newArray.push('train');
    
        }

        if(key === 'wind'){

            
            newArray.push('wind');
    
        }
    }



}
const result = {};

newArray.forEach((value) => {
  result[value] = (result[value] || 0) + 1;
});

console.log(result);