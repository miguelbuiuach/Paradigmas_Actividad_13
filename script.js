const ComprarCasco = new Promise((resolve,reject) =>{
    setTimeout(() => {
        resolve ({
            status: true,
            idCliente: 12355
        })
    }, 1000);
})

const ComprarGuantes = new Promise((resolve,reject) =>{
    setTimeout(() => {
        resolve({
            status: true,
            idCliente: 1245
        })
    }, 2000);
})

const IrDePaseo = new Promise((resolve,reject) =>{
    setTimeout(() => {
        resolve({
            status: true,
            distancia: 30
        })
    }, 8000);
})


const Paseo = () =>{
    IrDePaseo
        .then(infoPago => {
            console.log(infoPago);
            return ComprarCasco;
        })
        .then(infoPago2 => {
            console.log(infoPago2);
            return ComprarGuantes
        })
        .then(paseoLog => {
            console.log(paseoLog);
            return IrDePaseo
        })
        .catch(error => {
            console.error(error);
        })
        .finally(() => {
            console.log("el proceso ha finalizado");
        })
}

Paseo();