const axios = require('axios');

const getLugarLatLon = async(direccion) => {

    const encodedUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://geocode.xyz/Hauptstr.,+57632+${ encodedUrl }+"?json=1"`
    });

    const resp = await instance.get();

    if (resp.data.standard.length === 0) {
        throw new Error(`No hay resultados para ${ direccion }`);
    }

    const data = resp.data;
    const lugar = data.standard.city;
    const lat = data.latt;
    const lon = data.longt;


    return {
        lugar,
        lat,
        lon
    }

}

module.exports = {
    getLugarLatLon
}