const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const list$$ = document.createElement('ul');

for(car of cars){
    const item$$ = document.createElement('li');
    item$$.textContent = car;
    list$$.appendChild(item$$)
}

let insert = document.querySelector('[data-function="printHere"]');
insert.appendChild(list$$);

