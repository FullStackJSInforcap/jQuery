document.querySelector('#tituloVainilla').addEventListener('click', function(){
    document.querySelector('#tituloVainilla').style.backgroundColor = 'red';
});

let arregloElementos = document.querySelectorAll('.hola');
console.log(arregloElementos);

for(let i = 0 ; i < arregloElementos.length ; i++){
    console.log(arregloElementos[i]);
}

$('#tituloJquery').click(function(){
    $('#tituloJquery').css("background-color", "green");
});

$('#mostrar').on('click', function(){
    $('#tituloJquery').show();
});

$('#ocultar').on('click', function(){
    $('#tituloJquery').hide();
});

$('#mostrarOcultar').on('click', function(){
    $('#tituloJquery').toggle();
});

$('#ocultos').click(function(){
    console.log($(':hidden'));
});

$('#visibles').click(function(){
    console.log($(':visible'));
});


