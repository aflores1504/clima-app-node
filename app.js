const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({

    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }

}).argv;


// argv.direccion

/* lugar.getLugarLatLon(argv.direccion)
    .then(console.log); */

/* clima.getClima(12.19637, -86.09462)
    .then(console.log)
    .catch(console.log); */

const getInfo = async(direccion) => {

    try {

        const nombreLugar = await lugar.getLugarLatLon(direccion);
        if (nombreLugar) {

            const climaLugar = await clima.getClima(nombreLugar.lat, nombreLugar.lon);
            return `El clima de ${ nombreLugar.lugar } es de ${ climaLugar }`;

        }


    } catch (e) {
        return `No se pudo determinar el clima de ${ direccion }.`;

    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);