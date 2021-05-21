// 1. Write a function named "convertFahrToCelsius" that takes a single parameter and converts it to celsius.

function convertFahrToCelsius (F){
    const cal = (F - 32) * 5/9
    const result = cal.toFixed(4);
    if(typeof (F) !== "number") {
        console.log(`${F} is not a valid number but a/an ${typeof(F)}`)
      }
        console.log(result)
      
}

convertFahrToCelsius(0)
convertFahrToCelsius("0")
convertFahrToCelsius([1,2,3])
convertFahrToCelsius({temp: 0})