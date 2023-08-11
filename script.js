//  function calcPrice(price, discount){
//     const disc = (price*discount)/100;
//     const total = price - disc;
//     return total
// }
// function calcCuotas(price, cuotas){
//     return price/cuotas
// }
// function crearProducto(title,price,discount,description){
//     return `
//     Titulo: ${title}    
//     Precio: ${price}
//     Descuento: el descuento es del %${discount}
//     Precio con descuento: $${calcPrice(price, discount)}
//     Hasta 12 cuotas sin descuento: precio de cuota $${calcCuotas(price, cuotas)}
//     Descripcion: ${description}
//     `
// }
//---------------------------------------------------------------------
let listaProductos=[]
let listaUsuarios=[]
function agregarProducto(){
    nombre = prompt("Ingrese su producto")
    precio = prompt("Ingrese el precio")
    let producto={
        nombre1: nombre,
        Precio: precio
    }
    return producto
}
function subirProducto(producto,array){
    array.push(producto)
    return array
}

function crearUsuario(){
    let email = prompt("Ingrese su email")
    let contraseña = prompt("Ingrese su contraseña")
    while(email.length==0){
        email = prompt("Por favor, ingrese un email")
        console.log(email)
    }
    let usuario = {
        email,
        contraseña,
        admin : false
    }
    if(email.includes("@gm2dev.com")){
        usuario.admin = true
    }
        
    return usuario
}
function subirUsuario()
usuario=crearUsuario()

const userAdmin = {
    user: 'admin',
    password: '1234'
};

function login() {
    for (let x=1 ; x<=3; x++){
        const username = prompt("Ingrese el usuario:");
        const password = prompt("Ingrese la contraseña:");
        if(username == userAdmin.user && password == userAdmin.password) {
            console.log("Logueado!");
            return true;
        } 
        else {
            console.log("No logueado!")
        }
        }
        }
login()