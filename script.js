// function calcPrice(price, discount){
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
// //---------------------------------------------------------------------
// myArray=[]
// function agregarProducto(nombre,precio){
//     let producto={
//         nombre1: nombre,
//         Precio: precio
//     }
//     return producto
// }
// function subirProducto(producto,array){
//     array.push(producto)
//     return array
// }

// function crearUsuario(contraseña){
//     let email = prompt("Ingrese su email")
//     while(email.length==0){
//         email = prompt("Por favor, ingrese un email")
//         console.log(email)
//     }
//     let usuario = {
//         email,
//         contraseña,
//         admin : false
//     }
//     if(email.includes("@gm2dev.com")){
//         usuario.admin = true
//     }
        
//     return usuario
// }

// function login(usuario){
    
//     if(usuario.admin){
//         subirProducto(agregarProducto("Paleta",123),myArray)
//         return true
//     }
//     else{
//         alert("Que haces payaso?")
//         return false
//     }
// }
// let pepe=crearUsuario("123")
// login(pepe)
// console.log(myArray);
const userAdmin = {
    username: 'admin',
    password: '1234'
};

function login() {
    for (let x=1 ; x<=3; x++){
        const username = prompt("Ingrese el usuario:");
        const password = prompt("Ingrese la contraseña:");

        console.log(username);
        console.log(password);

    // Validar credenciales
        if(username == userAdmin.username && password == userAdmin.password) {
            console.log("Logueado!");
            return true;
        } 
        else {
            console.log("No logueado!")
        }
        }
        }
login()