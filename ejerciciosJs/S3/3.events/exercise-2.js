const input$$ = document.querySelector('input');
input$$.addEventListener('focus', testValue);

function testValue (e){
    const target$$ = e.target;
    console.log(target$$.value)

}