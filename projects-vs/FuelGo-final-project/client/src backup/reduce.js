// var arr = [3,99,-33,21,98,3,1]
var arr = [1,2,3]
// var another = [2,4,6]
//map
Array.prototype.myReduce = function (callback, init) {
    for(i=0 ; i < this.length ; i++ ){
        init = callback(init, this[i], i, this)
    }
    return init
}


const callback = (init, v,i,a) => {
    console.log(init.min)
        return {
            min: v > init.min ? init.min : v ,
            max: v < init.max ? init.max: v
        }
    }

var initial = {
    min: 199,
    max: -99
}

console.log([8,5,9,1,2,7].reduce(callback,initial))
// console.log(arr.myReduce((init,v,i,a) => {
//     return init + v
// },0
// ))
