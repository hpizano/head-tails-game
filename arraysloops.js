const arr = [1,2,3,4,5]
const stringArr = ["hello", "world"]

//Anytime we want to access and array, keep in mind
//index starts at number 0

// console.log(stringArr.length)

//To access last item in an array

// console.log(stringArr[stringArr.length-1])

const str = "This is a sentence"  //spaces do count when counting lenght in a string//
// console.log(str[4])

//push and pop examples// add and remove from the end //
// arr.push(10,50,100)
// console.log(arr)
// arr.pop()
// const num = arr.pop()

// console.log(arr)
// console.log(num - 1 )

//shift and unshift examples//
// arr.unshift(10,50,100)
// console.log(arr)
// arr.shift()
// console.log(arr)

//slice and splice//
// const newArr = arr.slice(2,4)
// console.log(newArr)
// console.log(arr)

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, 'May');
// // Replaces 1 element at index 4
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "May"]

// While Loop //

let counter = 10
while(counter >= 0){
    console.log(`Countdown from: ${counter}`)
    counter--
}