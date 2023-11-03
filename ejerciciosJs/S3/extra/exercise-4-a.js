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




