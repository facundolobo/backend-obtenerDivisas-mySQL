const { response, request } = require("express");
const Divisa = require("../models/divisa");


const obtenerDivisas = async(req = request, res = response) => {
    const { De, A, Cant } = req.query; //obtiene el limite de los query enviados
    try {
        // await Divisa.create(
        //     {
        //     moneda:'ARS',
        //     fecha:new Date().getTime(),
        //     usd:0.01
        //     })
        // await Divisa.create({
        //     moneda:'EUR',
        //     fecha:new Date().getTime(),
        //     usd:1.16
        //     });
        // await Divisa.create({
        //     moneda:'BTC',
        //     fecha:new Date().getTime(),
        //     usd:56645.70
        //     });
        // await Divisa.create({
        //     moneda:'JPY',
        //     fecha:new Date().getTime(),
        //     usd:0.0088
        //     }
            
        // );
        let divisas= await Divisa.findAll();
        // divisas.every(divisa => console.log( divisa.moneda) )
        let monedas = divisas.map(divisa => divisa.moneda );
        // console.log(divisas.every(divisa => console.log( divisa.moneda))); // true

        res.json({
            monedas
        })

    } catch (error) {
        console.log(error);
    }

}



module.exports={
    obtenerDivisas
}