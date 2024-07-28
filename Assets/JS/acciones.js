
function eleccioncliente(nombre, id, clave, saldo) {
    this.nombre = nombre
    this.id = id
    this.clave = clave
    this.saldo = saldo
}
let cliente1 = new eleccioncliente("Valentina Cerpa", 12345, 2222, 500);
let cliente2 = new eleccioncliente("Aldo Oliva", 67895, 3333, 1000);
let cliente3 = new eleccioncliente("Angel Candia", 89423, 4444, 2000)

let clientes = [cliente1, cliente2, cliente3]

function ValidarID() {
    let action1 = parseInt(prompt("Ingrese su identificador"));

    let cliente = null
    for (let i = 0; i < clientes.length; i++) {
        if (clientes[i].id == action1) {
            cliente = clientes[i];
            break

        }
    }

    if (cliente) {
        let claveingresada = parseInt(prompt("Ingrese su clave: "));
        if (claveingresada == cliente.clave) {
            alert("Bienvenido " + cliente.nombre);
            let action2;
            do {
                action2 = parseInt(prompt("Selecciona una opción\n1.-Ver saldo\n2.-Realizar giro\n3.-Realizar depósito\n4.-Salir"))
                if (![1, 2, 3, 4].includes(action2)) {
                    alert("Opción ingresada no valida");
                } else {

                    switch (action2) {
                        case 1:
                            alert("Su saldo actual es $" + cliente.saldo)
                            break;
                        case 2:
                            let montogirado = parseInt(prompt("Su saldo actual es $" + cliente.saldo + "\nIngrese el saldo que desea girar"))
                            if (montogirado <= cliente.saldo) {
                                cliente.saldo = cliente.saldo - montogirado
                                alert("Giro realizado. Su nuevo saldo es $" + cliente.saldo)
                            } else {
                                alert("Saldo insuficiente para realizar esta acción")

                            }
                            break;
                        case 3:
                            let montodepositado = parseInt(prompt("Su saldo actual es $" + cliente.saldo + "\nIngrese el saldo que desea depositar"))
                            cliente.saldo = cliente.saldo + montodepositado
                            alert("Deposito realizado. Su nuevo saldo es $" + cliente.saldo)
                            break
                    }
                }
            } while (action2 != 4);




        } else { alert("Clave incorrecta"); }
    } else {
        alert("Numero de identificacion no corresponde a nuestros registros")

    }
}


ValidarID();

