
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


     // question  = 5 //


  /*  function checkForAlphabetA (value){
        if(value.match('a')){
            return("includes a")
        }else{
            return("does not include a")
        }
    } 

    console.log(checkForAlphabetA("tany"))   */



    // question = 6 // 



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


    // question = 8 //


  /*  function isHelloPresent(a){
        if(a.match("hello")){
            return("true")
        }else{
            return("false")
        }

    }

    console.log(isHelloPresent("hello world"))
    console.log(isHelloPresent("world"))   */


      //question = 9 //


    /*  function isMultipleOfThree(num){
        if(num%3 === 0){
            return("true")
        }else{
            return("false")
        }
      }

      console.log(isMultipleOfThree(9))
      console.log(isMultipleOfThree(5))  */


      //question  = 10 //


     /* const multiplyByTen = (num) => num * 10 
      
      console.log(multiplyByTen(30))    */



      //question = 11 //


   /*   let user = {
        title: "iPhone",
        price: 5999,
        description: "The iPhone is a smartphone developed by Apple"
      }

       let  {title , price , description}= user

       console.log(price)   */




       // question = 12 //



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



    //question = 13 // 



 /*    const numbers = [1,2,3]
  
  const [a,b,c] = numbers

  console.log(a)               */


  //question = 14 //


 /*    const defaultParamsfunc = (a,b,c=4) => a*b*c;
  
        console.log(defaultParamsfunc(3,1))   */




        //question = 15 //


   /*   const person = {
        name:"abhishek jain",
        age : 30
      }  

       person.age = 35;

       console.log(person.age)       */



       //question = 16 //


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


       // question = 17 //



     /*  const person1 = { name: 'Ajay', age: 20 };
       
       function isEligible (person,num){
        if(person.age + num > 21){
            return("true")
        }else{
            return("false")
        }
       }

       console.log(isEligible(person1 ,2))     */ 


       //question = 18 //

 
 

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





   //question = 19 //


   
/*   let user = [1,2]
    let [b,a] = user

   console.log(a)       */ 

   

   //question = 20 //



  /*     const add = (a=30,b=0) => a+b

       console.log(add(2,3))                 */



       //question = 21//


    /*   const obj = {a:1 , b:2, c:3 ,d:4};

       const combineobj = () => obj

       const combineobject = combineobj()

       console.log(combineobject)             */ 


       //question = 22//



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




    //question = 23 //


   /* const stringToUpperCase = (obj) => obj.toUpperCase();

    console.log(stringToUpperCase("hello"))   */


    //question = 24 //



  /*    const concatenateStrings = (a , b) =>  a + b
   
      console.log(concatenateStrings("hello" , "world"))     */ 




      //question = 25 //


     /* const lastElement = (arry) => arry.pop()

      console.log(lastElement([1,2,3,4,5]))      */



      //question = 26 //



     /*  const firstElement = (arry) =>  arry.shift()

      console.log(firstElement([1,2,3,4,5]))    */



      // question = 27 // 


  /*  const arr = [1,2,3,4,5]

    const sum =  (arr,num) => arr[0] + num
      
     console.log(sum([1,2,4],7))  */





      //question = 28//


 /*  const sum =  (arr) => Number(arr.slice(-1)) + Number(arr[0]) 

    console.log(sum([1,23,3,4,5]))       */
    
    



    //question = 29//


   /*    const person1 = { name: 'John', age: 25, occupation: 'Software Engineer' }
       const person2 = { name: 'Jane', age: 45, occupation: 'Data Analyst' }
    
    function person (obj){
        return `${obj.name} is ${obj.age}your age`
    }


    console.log(person( person2))      */



    //question = 30//


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



  //question = 31 //
  
  
  /*    const items = ['apple','banana','orange']

     const formatArray = (items) => {
     const value1 = items.length
     const value2 = items[0]
     const value3 = items.slice(-1)

     return `The array has ${value1} , and the first item is '${value2}' , and the last item is '${value3}'`

  }

  console.log(formatArray(items))            */


  //question = 31//
  
  
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



  //question =  33 //


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



  //question = 34 //


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



    //question = 35 //



 /*   const startWithA = (str) => str.charAt(0) === "A" ? "true":"false"

    console.log(startWithA("Akshita"))
    console.log(startWithA("fijid"))            */





    //question = 36//



/*
  const array = [1,2,3,4,5]
  
  const printFirstCharacter = (arr) => arr.shift()


  console.log(printFirstCharacter([1,2,3,4,5]))             */



  //question = 37 //


/*
const array = [0,1,1,2,3,4,5];


const printLastFive = ([first,second,...third]) => console.log(first,second,third);

printLastFive(array);               */



// question = 38 //

/*
const array = [1,2,3,4,8];

const printSecondCharacter = (arr) => arr[1] * 20;

console.log(printSecondCharacter(array))          */



// question = 39 //

  
/*     const array = ['akshay','shweta', 'prerna', 'vinay']

     const sayHello = (arr) => `hello ${arr[1]}`


     console.log(sayHello(array));                   */




     // question = 41 //               
          
     
/*
    const array = [10,4,3,7,1,5]

     const sumFirstTwoElement = (arr) => arr[0] + arr[1]

     console.log(sumFirstTwoElement([10,4,7,1,5]))
     console.log(sumFirstTwoElement([10,48,7,1,5]))           */



     //question = 42 //



/*    const array = [7,4,10,7,5,3]

    const printMultipleOfFive = (arr) => arr % 5 === 0

     var result =  array.find(printMultipleOfFive)

   console.log(result)                   */


   // question = 43 //

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



  //question = 44 //


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





  // question = 45//


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


  //question = 46 //



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








  