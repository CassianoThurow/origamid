const now = new Date()


console.log(now.getDate())
console.log(now.getDay())
console.log(now.getMonth())
console.log(now.getFullYear())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getTime())
console.log(now.getUTCHours() - 3)



const now = new Date();
const future = new Date('Dec 24 2021 23:59')


function transformDays(time){
    return time / (24 * 60 * 60 * 1000)
}


console.log(now)
console.log(future)
const nowDays = transformDays(now.getTime())
const futureDays = transformDays(future.getTime())



console.log( futureDays - nowDays)