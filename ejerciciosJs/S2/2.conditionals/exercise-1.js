const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, 
    {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, 
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, 
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
];


for( let i = 0; i < alumns.length; i++){
        
    if (alumns[i].T1 === false && alumns[i].T2 === false ){
        
        
        console.log(alumns[i].name, ': ', 'No isApproved');
    } 

    else if(alumns[i].T1 === true && alumns[i].T2 === false && alumns[i].T3 === true){
        
        
        console.log(alumns[i].name, ': ', 'isApproved');
    }

    else if(alumns[i].T1 === false && alumns[i].T2 === true && alumns[i].T3 === true){
        
        
        console.log(alumns[i].name, ': ', 'isApproved');
    }
    
    if (alumns[i].T1 === true && alumns[i].T2 === true ){
        
        
        console.log(alumns[i].name, ': ', 'isApproved');
    } 


}
    
