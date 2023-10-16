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


    
for( const user of users){


    for(key in user.favoritesSounds){
            for(key1 in user.favoritesSounds){

                if(key === 'waves'){
                   
                    console.log(user.name + ' ' + key + '=' + user.favoritesSounds.waves.volume); 
                }

                if(key === 'rain'){
                   
                    console.log(user.name + ' ' + key + '=' + user.favoritesSounds.rain.volume); 
                }

                if(key === 'firecamp'){
                   
                    console.log(user.name + ' ' + key + '=' + user.favoritesSounds.firecamp.volume); 
                }

                if(key === 'shower'){
                   
                    console.log(user.name + ' ' + key + '=' + user.favoritesSounds.shower.volume); 
                }

                if(key === 'train'){
                   
                    console.log(user.name + ' ' + key + '=' + user.favoritesSounds.train.volume); 
                }

                if(key === 'wind'){
                   
                    console.log(user.name + ' ' + key + '=' + user.favoritesSounds.wind.volume); 
                }
                
            }

            
             
    }

    if(user.name === 'Manolo el del bombo'){

        let resultManolo = 'La media de Manolo el del bombo es =' + ((parseInt(user.favoritesSounds.waves.volume) + parseInt(user.favoritesSounds.rain.volume) + parseInt(user.favoritesSounds.firecamp.volume)) / 3);
        console.log(resultManolo);
    }

    if(user.name === 'Mortadelo'){

        let resultMorta = 'La media de Mortadelo es =' + ((parseInt(user.favoritesSounds.waves.volume) + parseInt(user.favoritesSounds.shower.volume) + parseInt(user.favoritesSounds.train.volume)) / 3);
        console.log(resultMorta);
    }

    if(user.name === 'Super Lopez'){

        let resultLopez = 'La media de Super Lopez es =' + ((parseInt(user.favoritesSounds.shower.volume) + parseInt(user.favoritesSounds.train.volume) + parseInt(user.favoritesSounds.firecamp.volume)) / 3);
        console.log(resultLopez);
    }

    if(user.name === 'El culebra'){

        let resultCulebra = 'La media de El culebra es =' + ((parseInt(user.favoritesSounds.waves.volume) + parseInt(user.favoritesSounds.wind.volume) + parseInt(user.favoritesSounds.firecamp.volume)) / 3);
        console.log(resultCulebra);
    }

}

