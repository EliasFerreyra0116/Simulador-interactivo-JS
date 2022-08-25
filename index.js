let gastoTotal = 0;
let precioProducto = 0;
let contador = 0;

alert("vamos a sumar el total de productos hasta que ingrese un valor igual a cero, menor que cero o que no sea un valor válido numerico");

ingresarPrecio();
mostrarTotal();  


function ingresarPrecio(){
    let precioProducto = 0;
    precioProducto = parseInt(prompt ("Ingrese el precio del producto" + (contador + 1) + ":")
    );
while (precioProducto > 0){
    gastoTotal = calcularTotal(precioProducto);
    contador++;
    precioProducto = Number (
        prompt("ingrese el precio del producto" + (contador + 1)  + ":")
    );
}


if(precioProducto <= 0){
console.log("Ha terminado de introducir los precios de los productos");

}
}


function calcularTotal(precioProducto){
return gastoTotal + precioProducto;
}

//concatenacion
function mostrarTotal(){ 
    console.log ("Cantidad de productos: " + contador );
    console.log("El precio total es $" + gastoTotal);
    console.log("El precio total es $" , gastoTotal);
}