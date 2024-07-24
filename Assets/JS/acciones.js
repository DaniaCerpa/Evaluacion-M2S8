let action1= parseInt(prompt("ingrese su identificador"));


function ValidarID() {
    let clientes = [
        { nombre: "Valentina Cerpa", id: 12345, clave: 2222, saldo: 500 },
        { nombre: "Aldo Oliva", id: 67895, clave: 3333, saldo: 1000 },
        { nombre: "Angel Garmendia", id: 89423, clave: 4444, saldo: 2000 }]
let cliente = null
for (let i = 0; i < clientes.length; i++) {
    if (clientes[i].id ==action1){
        cliente = clientes[i];
        break
        
    }
}

if (cliente) {
        let claveingresada = parseInt(prompt("Ingrese su clave: "));
        if (claveingresada == cliente.clave) {
            alert("Bienvenido " +cliente.nombre);
            let action2;
            do {
                action2 = parseInt(prompt("Selecciona una opción\n1.-Ver saldo\n2.-Realizar giro\n3.-Realizar depósito\n4.-Salir"))
                if (![1, 2, 3,4].includes(action2)) {
                    alert("Opción ingresada no valida");
                } else {

                    switch (action2) {
                        case 1:
                            alert("Su saldo actual es $" + cliente.saldo)
                            break;
                        case 2:
                            let montogirado =parseInt(prompt("Su saldo actual es $" + cliente.saldo + "\nIngrese el saldo que desea girar"))
                           if (montogirado<=cliente.saldo) { cliente.saldo = cliente.saldo - montogirado
                            alert ("Giro realizado. Su nuevo saldo es $" + cliente.saldo)
                           } else {alert("Saldo insuficiente para realizar esta acción")
                            
                           }
                            break;
                        case 3:
                            let montodepositado =parseInt(prompt("Su saldo actual es $" + cliente.saldo + "\nIngrese el saldo que desea depositar"))
                            cliente.saldo = cliente.saldo+ montodepositado
                            alert ("Deposito realizado. Su nuevo saldo es $" + cliente.saldo)
                            break
                    }
                }
            } while (action2 != 4);




        } else { alert("Clave incorrecta"); }
    } else {
        alert("Numero de identificacion no corresponde a nuestros registros")

    }
}


ValidarID ();

