// Problem 1 creat a function that will spit out what number is the highest.

let x = 1
let y = 2


function findingNumbers(num1,num2){
  if(num1 > num2){
     console.log(`${num1} IS THE LARGEST NUM`)
  } else if(num2 > num1){
    console.log(`${num2} IS THE LARGEST NUM`)
  } else if(num1 === num2){
   console.log(`${num1} & ${num2} are equal to each other`)
  }
}




// console.log(findingNumbers(1234123412,563456))



// problem 2 create a loop that counts to 50 fiz buzzzzer style

// for (let i = 1; i < 51; i++){
//   if(i % 3 === 0 && i % 5 === 0){
//     console.log('fizzbuzz')
//   } else if(i % 3 === 0){
//     console.log('fizz')
//   } else if(i % 5 === 0){
//     console.log('buzz')
//   } else{
//     console.log(i)
//   }
// }


// problem 3

// let randomArr = [1, 4, 11, 2, 37, -4]
// let min = randomArr[0]
// let max = randomArr[0]
// for(let i = 0; i < randomArr.length; i++){
//   for(let k = 0; k < randomArr.length; k++){
//     if(randomArr[k] < min)
//     min = randomArr[k]
//   else if(randomArr[i] > max){
//     max = randomArr[i]
//   }
// }
// }

// let finalNumbers = [min , max]

// console.log(finalNumbers)



// problem 4

let arr1 = [1, 4, 11, 2, 37, -4]
let arr2 = [0, 21, 33, 6, 0, -9]
let arr3 = [0, 1, 2, 3, 4, 5]


function addToZero(arr){
  let value = false;
  for(let i = 0; i < arr.length; i++){
    for(let k = 1; k < arr.length; k++){
      if(i !== k){
        if(arr[i] + arr[k] === 0){
          value = true
             } 
            }
          }
        } return value
} 

console.log(addToZero(arr1))
console.log(addToZero(arr2))
console.log(addToZero(arr3))
