
    // 1= Write a function that takes a user's age and determines if they are old enough to vote (age 18 or older). //


/* function isEligibleToVote(age) {
     if(age >= 18){
        return("Eligible to vote")
    }else{
        return("Not eligible to vote")
    }
}
console.log(isEligibleToVote(17))
console.log(isEligibleToVote(18))    */



    // 2= Write a function that takes two numbers as input and determines which one is greater. //

  
 /*  function isGreater (num1,num2){
    if(num1 > num2){
        return `${num1} is greater than ${num2}`
    }else{
        return `${num2} is greater than ${num1}`
    }

   } 

   console.log(isGreater(2,5))    */



    //3= Write a function that takes a number as input and determines if it is positive or negative.  //


 /*   function checkNum(num){
        if(num > 0){
            return("positive number")
        }else{
            return("negative number")
        }
    }

    console.log(checkNum(-2))
    console.log(checkNum(2))      */


     //4= Write a function that takes a number as input and determines if it is even or odd. //


    /* function isEvenOdd(num){
        if(num%2 === 0){
            return("even number")
        }else{
            return("odd number")
        }
     }

     console.log(isEvenOdd(6))
     console.log(isEvenOdd(6))   */


     // 5/- Write a function that takes a string as input and determines if it contains the letter 'a' or ‘A’.//


  /*  function checkForAlphabetA (value){
        if(value.match('a')){
            return("includes a")
        }else{
            return("does not include a")
        }
    } 

    console.log(checkForAlphabetA("tany"))   */



    // 6/- Write a function that takes a string as input and determines if it is longer than 5 characters. // 



 /*   function checkLength(num){
        if(num.length > 5){
            return("more than  5 character")
        }else{
            return("less than 5 character")
        }
    }
console.log(checkLength("pratap"))
console.log(checkLength("tanay"))  */


   // 7 =  Write a function that takes a number as input and determines if it is between 1 and 10. //



/*  function isBetweenOneAndTen (num) {
    if (num < 10 ) {
        return("true")
    }else{
        return("false")
    }
  } 

  console.log(isBetweenOneAndTen(11))
  console.log(isBetweenOneAndTen(5))    */


    //  8/- Write a function that takes a string as input and determines if it contains the word "hello". //


  /*  function isHelloPresent(a){
        if(a.match("hello")){
            return("true")
        }else{
            return("false")
        }

    }

    console.log(isHelloPresent("hello world"))
    console.log(isHelloPresent("world"))   */


      // 9/- Write a function that takes a number as input and determines if it is a multiple of 3.  //


    /*  function isMultipleOfThree(num){
        if(num%3 === 0){
            return("true")
        }else{
            return("false")
        }
      }

      console.log(isMultipleOfThree(9))
      console.log(isMultipleOfThree(5))  */


      // 10/- Write a function which takes in a number as input and returns it after multiplying by 10. //

/*
      const multiplyByTen = (num) => num * 10 
      
      console.log(multiplyByTen(30))    */



      // 11/- Console individual values of the product object using object destructuring //


   /*  let user = {
        title: "iPhone",
        price: 5999,
        description: "The iPhone is a smartphone developed by Apple"
      }

       let  {title , price , description}= user

       console.log(price)                     */  




       //  12/- 1. Create an object book with properties title, author, and pages. Create a function getBookDetails that takes a book object as a parameter and returns if the book has more than 100 pages.  //



/*    const obj = {

    title : "magine",
    author : "ajay",
    pages : 100
 } 
 
 function getBookDetail(book){
    if(obj.pages < book){
        return("'true' if the pages are above 100")
    }else{
        return("'false' if the pages are below 100")
    }
 }


 console.log(getBookDetail())           */



    // 13/- Given an array numbers containing the numbers 1, 2, and 3. Use array destructuring to log each number to the console. // 



 /*    const numbers = [1,2,3]
  
  const [a,b,c] = numbers

  console.log(a)               */


  // 14/- Convert the given function into ES6 with least amount of characters. //


 /*    const defaultParamsfunc = (a,b,c=4) => a*b*c;
  
        console.log(defaultParamsfunc(3,1))   */




        // 15/-Create an object person with two properties, "name" and "age" and then updates the "age" property to a new value. Initial age should be 30. //


   /*   const person = {
        name:"abhishek jain",
        age : 30
      }  

       person.age = 35;

       console.log(person.age)       */



       // 16/-  Write a function that takes an object car and returns true if the car is a sports car (i.e. has a horsepower property greater than or equal to 300)//


     /*  const car1 = { make: 'Porsche', model: '911', horsepower: 450 };
       const car2 = { make: 'Toyota', model: 'Camry', horsepower: 200 };
       
       function  isSportCar(car){
        if(car.horsepower >= 300){
            return ("true")
        }else{
            return("false")
        }
       }

       console.log (isSportCar(car2))
       console.log (isSportCar(car1))   */ 


       // 17/- Write a function that takes an object person and a number num as arguments and returns true if the person's age plus num is greater than 21. Otherwise, it should return false.   //



     /*  const person1 = { name: 'Ajay', age: 20 };
       
       function isEligible (person,num){
        if(person.age + num > 21){
            return("true")
        }else{
            return("false")
        }
       }

       console.log(isEligible(person1 ,2))     */ 


       // 18/-  Write a function that takes an object blog and returns true if the blog has more than 1000 views (i.e. has a views property greater than 1000) //

 
 

/*   const blog1 = {title: 'How to Learn JavaScript', author: 'John Doe', views: 1430};
     const blog2 = {title: '10 Reasons to Start a Blog', author: 'Jane Smith', views: 500};

function getViews (blog) {
    if(blog.views > 1000){
        return("true")
    }else{
        return("false")
    }
}

   console.log(getViews(blog1))
   console.log(getViews(blog2))        */





   // 19/-  Swap the values of two variables using array destructuring.  //


   
/*   let user = [1,2]
    let [b,a] = user

   console.log(a)       */ 

   

   // 20/-  Convert this function into ES6 with least amount of characters. //



  /*     const add = (a=30,b=0) => a+b

       console.log(add(2,3))                 */



       // 21/-  Write an ES6 function combineObjects with least amount of characters which merges two objects into one.//


    /*   const obj = {a:1 , b:2, c:3 ,d:4};

       const combineobj = () => obj

       const combineobject = combineobj()

       console.log(combineobject)             */ 


       // 22/- 8. Convert the function getData, into an ES6 function with last amount of characters. //



     /*  function getData(person) {
        const name = person.name;
        const address = person.address.city
        console.log(name); 
        console.log(address); 
    }
    
    const person = {
      name: 'John Doe',
      address: {
        city: 'New York',
        state: 'NY',
      },
    };


    const {  name , address } = person;

    getData(person)            */ 




    // 23/- Write a function that takes a string as input and returns the string in all uppercase letters. //


   /* const stringToUpperCase = (obj) => obj.toUpperCase();

    console.log(stringToUpperCase("hello"))   */



    // 24/- Write a function that takes two strings as input and concatenates them together. //



  /*    const concatenateStrings = (a , b) =>  a + b
   
      console.log(concatenateStrings("hello" , "world"))     */ 




      // 25 /- Write a function that takes an array and returns the last element in the array. //


     /* const lastElement = (arry) => arry.pop()

      console.log(lastElement([1,2,3,4,5]))      */



      // 26 /- Write a function that takes an array and returns the first element of the array. //



     /*  const firstElement = (arry) =>  arry.shift()

      console.log(firstElement([1,2,3,4,5]))    */



      //  27/- Write a function that takes an array and a number and returns the sum of first element and the number. // 


  /*  const arr = [1,2,3,4,5]

    const sum =  (arr,num) => arr[0] + num
      
     console.log(sum([1,2,4],7))  */





      // 28/- Write a function that takes an array and returns the sum of first and last element. //


 /*  const sum =  (arr) => Number(arr.slice(-1)) + Number(arr[0]) 

    console.log(sum([1,23,3,4,5]))       */
    
    



    // 29/- Write a function that takes an object representing a person's information (name, age, occupation) and returns a template literal that includes the person's name and age in a sentence.//


   /*    const person1 = { name: 'John', age: 25, occupation: 'Software Engineer' }
       const person2 = { name: 'Jane', age: 45, occupation: 'Data Analyst' }
    
    function person (obj){
        return `${obj.name} is ${obj.age}your age`
    }


    console.log(person( person2))      */



    // 30/- Create a function changeOccupation that takes an object person and a string newOccupation as parameters, and changes the occupation property of the person object to the newOccupation. Log the person object to the console before and after calling the function.//


/*       const person = {
    name:"amit", 
    age: 25,
    job : "software engineer"
}


  function changeOccupation(person ,newjob){
    person.job = newjob 
  }

  console.log(person)
  console.log(changeOccupation())    */



  // 31/- Create a function that takes an array of strings as an argument and returns a string that includes the number of items in the array and the first and last items //
  
  
  /*    const items = ['apple','banana','orange']

     const formatArray = (items) => {
     const value1 = items.length
     const value2 = items[0]
     const value3 = items.slice(-1)

     return `The array has ${value1} , and the first item is '${value2}' , and the last item is '${value3}'`

  }

  console.log(formatArray(items))            */


  // 32/- Create a function that takes a product object as an argument and returns a string that includes the product name, price, and a message based on whether it is in stock or not. //
  
  
 /*  const product = {
     name: 'Socks',
     price: 249,
     inStock: true,
  };



  const formatProduct = (product) =>{
    if(product.inStock === true){
        return `${product.name} costs ${product.price} is in stock`
    }else{
        return  `${product.name} costs ${product.price} is not in stock`
    }
  }


  console.log(formatProduct(product))            */



  //  33/-  3. Write a function findPerson that takes an array of person objects and a name as parameters and returns the object with the matching name, or null if not found.  //


 /*   const persons  = [{ name: 'Amay', age: 25 }, { name: 'Akhil', age: 25 }]

     const findPersons = (arr , obj) => {
    const ss = arr.find(items => items.name === obj)
    if(ss){
        return("found")
    }else{
        return("if not found")
    }
  }

  console.log(findPersons(persons,"Amay"))     */



  // 34/- Write a function that uses destructuring to extract the first two elements from an array, and returns them in an object with keys 'first' and 'second'.  //


  /*   const arr1 = ['orange' , 'banana' , 'apple']
      const arr2 = ['red', 'blue' , 'green']

      const [orange, banana ,apple] = arr1;
      const [red , blue , green] = arr2;

       const pickFirstAndSecond = () =>{
       let var1  =  `first : ${orange} second : ${banana}`;
        let var2 = ` first : ${red} second : ${blue} `; 
        
        return var2 + var2
        
    }


    console.log(pickFirstAndSecond(arr1))            */



    // 35 /-5. Convert the following code to ES6+ syntax with minimum number of characters.  //



 /*   const startWithA = (str) => str.charAt(0) === "A" ? "true":"false"

    console.log(startWithA("Akshita"))
    console.log(startWithA("fijid"))            */





    // 36/-Write an ES6 function to return only the first character of the given array. //



/*
  const array = [1,2,3,4,5]
  
  const printFirstCharacter = (arr) => arr.shift()


  console.log(printFirstCharacter([1,2,3,4,5]))             */



  // 37/- Write a function to return the last 5 characters as an array from the given array.  //


/*
const array = [0,1,1,2,3,4,5];


const printLastFive = ([first,second,...third]) => console.log(first,second,third);

printLastFive(array);               */



//  38/- Write an ES6 function to return the second element of the given array by multiplying 20 to it. //

/*
const array = [1,2,3,4,8];

const printSecondCharacter = (arr) => arr[1] * 20;

console.log(printSecondCharacter(array))          */



//  39/ Write an ES6 function to return the second element of the given array by adding “Hello” before it. //

  
/*     const array = ['akshay','shweta', 'prerna', 'vinay']

     const sayHello = (arr) => `hello ${arr[1]}`


     console.log(sayHello(array));                   */




     // 41/- Write an ES6 function to return the sum of only first 2 elements of the array  //               
          
     
/*
    const array = [10,4,3,7,1,5]

     const sumFirstTwoElement = (arr) => arr[0] + arr[1]

     console.log(sumFirstTwoElement([10,4,7,1,5]))
     console.log(sumFirstTwoElement([10,48,7,1,5]))           */



     // 42/- Write an ES6 function to return the first element which is a multiple of 5 in the given array. //



/*    const array = [7,4,10,7,5,3]

    const printMultipleOfFive = (arr) => arr % 5 === 0

     var result =  array.find(printMultipleOfFive)

   console.log(result)                   */


   //  43/- Create a function which takes in the given object and returns another object only with the properties postalCode and city in it. //

/*   const userData = {
    name: 'Jane Doy',
    postalCode: '12134',
    city: 'Germany',
  }

  const {name , postal , city} = userData


  const getAddress = (data) => {
        var aa = Number(data.postal);
        var ss = data.city;
        return `postal :${name} , city:${ss}`
  }

  console.log(getAddress(userData))              */



  // 44/- Create a function which takes in the given object and returns a sentence which indicates name of the person and where the person lives //


/*
  const userData1 = {
    name: 'Gaurav',
    postalCode: '12134',
    country: 'Japan',
  }

  const printData = (data) => {
    var a = data.name;
    var b = data.country;
    return `${a} lives in ${b}`
  }
 
  console.log(printData(userData1))                          */





  //  45/- Create a function which takes a product object and returns a sentence about the product using ES6 features. //


 /* const product = {
    name: "Apple MacBook Air 2020",
      specification: {
      capacity: "256GB",
      size: "13.3 Inch"
      },
    price: 82900
  }

  const printProductDetsils = (data) =>{
    return `${data.name} which is of ${(data.size)} , has a capacity of ${data.capacity}`
  }

  console.log(printProductDetsils(product))             */


  // 46/- Write an ES6 function that accepts an array of integers and returns the maximum element in the array. Avoid using in-built methods. //



 const findMax = (num) => {
    let max = num[0]
    for(let i=0; i < num.length; i++){
        if(num[i] > max){
            max = num[i]
        }
    }
    return max
 }

  console.log(findMax([1,5,8,9,55,88]))








  