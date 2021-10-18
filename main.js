let cantVegano = 0;
let cantNormal = 0;
let precioVegano = 3500;
let precioNormal = 3000;
let pagar = 0;

function Pedido(nombreHelado, cantidad){
    this.nombreHelado = nombreHelado;
    this.cantidad = cantidad;
    this.tipoBase = function(){
        if(base == "vegano"){
            cantVegano = cant * precioVegano;
        }else{
            cantNormal = cant * precioNormal;
        }
    } 
}

let helado = prompt("ingrese el tipo de helado: helado1, helado2, helado3, helado4, helado5, helado6");
let base = prompt("Ingrese el tipo de base: vegano o normal");
let cant = parseInt(prompt("ingrese cantidad del helado"));    
let nuevoPedido = new Pedido(helado, base, cant);
nuevoPedido.tipoBase();
pagar = (cantVegano + cantNormal);
alert("El monto a pagar sera " + pagar +" por los helados " + nuevoPedido.cantidad);
