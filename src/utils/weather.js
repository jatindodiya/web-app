const request = require("request");

const weather = (address, callback) => {

    const options = {
        method: 'GET',
        url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
        qs: {city: address },
        headers: {
          'X-RapidAPI-Key': 'e4d9dd956cmshb2e99d966e97a3ep195826jsnaa06b6f6a705',
          'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
          useQueryString: true
        }
    };
    // console.log(options)

    request( options , function ( error, response, body ) {

        // console.log(error, body)

        if (error){
            return callback( error, null )  
        } 
        if(JSON.parse(body).error){
            return callback("City not found !", null)
        }
        // console.log(body);
        // console.log(response);
        body = JSON.parse(body)
        var forecast = "There is a temperature of "+ body.temp +"° today in %city%, however, it feels like "+ body.feels_like +"° with a humidity of "+ body.humidity +". the wind speed is "+ body.wind_speed +" at "+ body.wind_degrees +" degrees.";
        return callback(null,  {forecast: forecast} )
    });

};

module.exports = weather;