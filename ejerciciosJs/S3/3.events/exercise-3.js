const input$$ = document.querySelector('input');
input$$.addEventListener('input', getInput);

function getInput(){
    console.log(this.value);
}