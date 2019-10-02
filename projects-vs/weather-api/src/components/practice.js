// import { get } from "http"

const inputData = [0,1,2,3,4,5,6,7]

const namedDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]



// inputData.map(showDay)
const showDay = (index) => {

    return (namedDays[index])
}

getDay()


// const d = new Date();
// const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// const monday = days[1]
//  const weeklyDays = days[d.getDay()];
//  console.log('weeklyDAYS',weeklyDays)


 console.log(showDay(0)==="Tuesday")
 console.log(showDay(1)==="Wednesday")
 console.log(showDay(1)!=="Saturday")
 console.log(showDay(0)!=="Sunday")
 console.log(showDay(5)==="Sunday")

