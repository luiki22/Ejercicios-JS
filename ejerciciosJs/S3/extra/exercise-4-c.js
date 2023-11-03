const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];

const list$$ = document.createElement('ul');

for( countri of countries){

    
    const item2$$ = document.createElement('div');
    const title$$ = document.createElement('h4');
    
    title$$.textContent = countri.title;
    list$$.appendChild(title$$);


    const image$$ = document.createElement('img');
    image$$.src = countri.imgUrl;
    image$$.alt = "Imagen de " + countries.title;
    list$$.appendChild(image$$)

    

    document.body.appendChild(list$$)

}


function eliminar(){
    for(i = 0; i < list$$.length; i++){
        if(list$$[i].length = i){
            list$$[i].remove()
        }

    }

}
   





    // list$$.remove()
 



const btnEliminar1 = document.querySelector('#btn1')
btnEliminar1.addEventListener('click', eliminar);

const btnEliminar2 = document.querySelector('#btn2')
btnEliminar2.addEventListener('click', eliminar);

const btnEliminar3 = document.querySelector('#btn3')
btnEliminar3.addEventListener('click', eliminar);

const btnEliminar4 = document.querySelector('#btn4')
btnEliminar4.addEventListener('click', eliminar);

const btnEliminar5 = document.querySelector('#btn5')
btnEliminar5.addEventListener('click', eliminar);