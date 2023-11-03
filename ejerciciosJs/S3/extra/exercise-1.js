
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const list$$ = document.createElement('ul');

for(countri of countries){
    const item$$ = document.createElement('li');
    item$$.textContent = countri;
    list$$.appendChild(item$$)
}

document.body.appendChild(list$$);


