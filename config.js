module.exports.m1 = function () {

    console.log('process----', process.env.NODE_ENV)

    if(process.env.NODE_ENV=='production'){
        return {
            'port':4200
        }
    }
    if(process.env.NODE_ENV=='development'){
        return {
            'port':4100
        }
    }


}