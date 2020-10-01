const axios = require('axios');

const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=3a37623b2abc7210fe3f77b236db2e9b&units=metric`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}