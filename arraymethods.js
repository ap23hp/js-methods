
let arr=['a','b','c','d','e'];
console.log(arr.slice(1))
console.log(arr.slice(-2))
console.log(arr.slice(1,4))
console.log(arr.slice(1,-2))
//we can create shallow copy of array using slice

console.log(arr.slice())
console.log([...arr])

//SPLICE- It does actually change the orignal array,mutates array
//console.log(arr.splice(2))
console.log(arr)
//extract element are gone by splice
//remove last element of array
console.log(arr.splice(-1))
console.log(arr)

//reverse
let arr2=['a','b','c','d','e'];
console.log(arr2.reverse()) 
//it also mutate the orignal array

//concat method
let arr3=["t"]
let letters=arr3.concat(arr2)
console.log(letters)
//we can use spread operater as well
//does not mutate the orignal array

//join method
console.log(typeof(arr2.join("-")))

//at method

const arr5=[23,54,64]
console.log(arr5[0])
console.log(arr5.at(0))
//useful becasue- method chaining,works also on string
//taking last element of array
console.log(arr5[arr5.length-1])
console.log(arr5.slice(-1)[0])
console.log(arr5.at(-1))
console.log("apra".at(0))

//for each method

 const movements= [200, 450, -400, 3000, -650, -130, 70, 1300]
 //positive values are deposits in bank account and negetive values are withdrawls
 for (const movement of movements){
    if(movement>0){
console.log(`you depositied ${movement}`)
    } else{
        console.log(`you withdrew ${Math.abs(movement)}`)
        //Math.abs- removes negetive sign
    }
    
 }

//when we want index/counter also
console.log("---------------for of loop with counter----------------")
 for (const [i,movement] of movements.entries()){
    if(movement>0){
console.log(`movement ${i+1} you depositied ${movement}`)
    } else{
        console.log(` movement ${i+1} you withdrew ${Math.abs(movement)}`)
        //Math.abs- removes negetive sign
    }
    
 }

//for each is higher order function, we give for each instructions through call back function
console.log("--------for each-------------------")
 movements.forEach(function(movement){
if(movement>0){
console.log(`you depositied ${movement}`)
    } else{
        console.log(`you withdrew ${Math.abs(movement)}`)
        //Math.abs- removes negetive sign
    }
 })

 //when we want index/counter also , we can do with for each as in arguments for each pases   current element,index nd entire array, in this same order
 console.log("-----------for each with index-------------------")

  movements.forEach(function(movement,index,array){
if(movement>0){
console.log(`movement ${index+1} you depositied ${movement}`)
    } else{
        console.log(`movement ${index+1} you withdrew ${Math.abs(movement)}`)
        //Math.abs- removes negetive sign
    }
 })
//contnue and break statements do not work in for each
//for of-- break and continue works


//for each with maps and sets


const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value,key,map){
console.log(`${key}: ${value} `)
})

//set
console.log("-----------set------------------")
const currenciesUnique=new Set(['USD', 'GBP','USD','RUPEES','EUR','EUR'])
console.log(currenciesUnique)
currenciesUnique.forEach(function(value,key,map){
console.log(`${key}: ${value} `)
//key is exactly same as value- becoz set does not have index
})


//MAP METHOD-- CREATES A BRAND NEW ARRAY BASED ON ORIGNAL ARRAY- APPLIES A CALL BACK FN IN EACH IERATION-
//FILTER-FILTER ELEMENTS WHICH SATISFY CERTAIN CONDITIONS-RETURNS A NEW ARRAY
//REDUCE METHOD----ALL ARRAY ELEMENTS DOWN TO ONE SINGLE VALUE,
//  EXAMPLE ADDING ALL ELEMENTS TOGETHER , IT HAS ACCUMULATOR VARIABLE IN WHICH CUIRRENT ELEMET GETS ADDED TO

