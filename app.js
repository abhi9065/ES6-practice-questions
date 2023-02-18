
    //  question = 1 //


/* function isEligibleToVote(age) {
     if(age >= 18){
        return("Eligible to vote")
    }else{
        return("Not eligible to vote")
    }
}
console.log(isEligibleToVote(17))
console.log(isEligibleToVote(18))    */



    //question = 2 //

  
 /*  function isGreater (num1,num2){
    if(num1 > num2){
        return `${num1} is greater than ${num2}`
    }else{
        return `${num2} is greater than ${num1}`
    }

   } 

   console.log(isGreater(2,5))    */



    //question = 3 //


 /*   function checkNum(num){
        if(num > 0){
            return("positive number")
        }else{
            return("negative number")
        }
    }

    console.log(checkNum(-2))
    console.log(checkNum(2))      */


     //question = 4 //


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


   // question = 7 //



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



     /*   const firstElement = (arry) =>  arry.shift()

      console.log(firstElement([1,2,3,4,5]))    */



      // question = 27 // 


      
