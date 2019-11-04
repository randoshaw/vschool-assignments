const express = require("express");
const totalsRouter = express.Router();
const CarLog = require("../models/carLogModel")

totalsRouter.get('/:carId', (req, res, next) => { //req.params.carId. ':' adds the params
    CarLog.find({
        user: req.user._id,
        car: req.params.carId
    },(err, logs) => {
        if(err){
            res.status(500)
            return next(err)
        }
        // a=accumulator v=current value
        const results = logs.reduce((a,v) => {
            let min = v.odometer < a.min ? v.odometer : a.min
            let max = v.odometer > a.max ? v.odometer: a.max

            return {
                'amountSpent': a.amountSpent + v.price,
                'milesTravelled': max - min,
                'odometer': max,
                'min': min,
                'max': max 
            }
        },{
            'amountSpent': 0,
            'milesTravelled': 0,
            'odometer': 0,
            'min': 999999999999,
            'max': 1
        })


        return res.status(200).send(results)
    })
})


module.exports = totalsRouter