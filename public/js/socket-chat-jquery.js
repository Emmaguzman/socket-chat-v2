var params= new URLSearchParams(window.location.search);

var divUsuarios=$('#divUsuarios');
var formEnviar=$('#formEnviar');
var txtMensaje=$('#txtMensaje');


//Renderizar usuarios

function renderizarUsuarios(personas) {

    console.log(personas);
    var html="";

    html+='<li>';
    html+='<a href="javascript:void(0)" class="active"> Chat de <span>'+params.get('sala')+'</span></a>';
    html+='</li>';

    for (var i = 0; i < personas.length; i++) {
        html+='<li>';
        html+='<a data-id="'+personas[i].id+'" href="javascript:void(0)"><img src="assets/images/users/2.jpg" alt="user-img" class="img-circle"> <span>'+personas[i].nombre+' <small class="text-success">online</small></span></a>';
        html+='</li>';
    }
    divUsuarios.html(html)

}

//listener

divUsuarios.on('click','a',function(){
    var id=$(this).data('id');
    if(id){
        
    }

});

formEnviar.on('submit',function(e){
    e.preventDefault();
    console.log(txtMensaje.val())
});