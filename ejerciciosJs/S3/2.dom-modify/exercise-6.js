const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const list$$ = document.createElement('ul');

for(app of apps){
    const item$$ = document.createElement('li');
    item$$.textContent = app;
    list$$.appendChild(item$$)
}

document.body.appendChild(list$$);

    



