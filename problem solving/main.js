// function tellFortune(jobTitle , geographicLocation , Name ,  numberOfChildren){
// document.write("You will ba a " +jobTitle +" in " + geographicLocation +" , and marrid to " + Name +" with " + numberOfChildren + "<br>")
// }

// tellFortune('software engineer', 'Jordan', 'Alice', 3);



// function calculateDogAge(puppyAge){
//     let y = puppyAge*7;
//     document.write("Your doggie is " + y + "years old in dog years ! <br>")
// }

// calculateDogAge(1); 
// calculateDogAge(2); 
// calculateDogAge(5); 



// function calculateSupply( age , amountPerDay){
// let yearsLeft=100-age;
// let needed= yearsLeft *365 *amountPerDay;
// document.write("You will need " + needed +" cups of tea to last you untel the rip old of 100 <br> " )
// }

// calculateSupply(30 , 3);
// calculateSupply(25, 2);


// function greet(name){
//     document.write(" Hello " + name )
// }

// greet("Adam");
// greet("Ashar");



// function double(cat) {
//     let xx;
//   return 2 , xx; //not a declared var , or parameter
// }

// function double(seven) {
//   seven=7;  
//   return 2 , seven; // 7 is constant not parameter so i will declare a var named seven 
// }

// function double('7') {
//   return 2  '7';    // i put the parameter name evn if '7' is a string here 
// }



// func double1(x {
//   return 2  x ;
// }

//fixed funcion

// function double1(x)
// {
//     return 2, x;
// }

// functiondouble2 x)
// return 2  x;
// }

//fixed function

// function double2(x)
// {
//     return 2, x;
// }


// function (x) double3 {
//   return 2  x;

//fixed function

// function  double3 (x) 
// {
//   return 2, x;
// }



// function cube(length)
// {
//  document.write(length*length*length +"<br>")
// }

// cube(1);
// cube(2);
// cube(3);
// cube(4);



// function multiply(x,y){
//     document.write( "= " + x*y + "<br>")
// }
// multiply(3,4);
// multiply(5,4);


// function canIGetADrivingLicense(driverAge){
// if(driverAge>=20)
// {
//     document.write("yes you can")
// }
// else
// {
//     let targetYear =20-driverAge;
//    document.write("please come back after " +targetYear + " years to get one <br>")
// }
// }

// canIGetADrivingLicense(21);
// canIGetADrivingLicense(17);
// canIGetADrivingLicense(10);
// canIGetADrivingLicense(14);



// function sameLength(firstWord , secWord )
// {
//     if(firstWord.lenght===secWord.lenght)
//     {
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// document.write(sameLength("tree","car") +"<br>");
//  document.write( sameLength("tree","clue")+"<br>");



// function largerNubmer(firstNum , secNum){
//     if(firstNum > secNum)
//     {
//         return firstNum;
//     }
//     else if( secNum > firstNum)
//     {
//         return secNum ;
//     }
//     else{
//         return "problem";
//     }
// }
//  document.write(largerNubmer(5,6)+"<br>");
//  document.write(largerNubmer(6,6)+"<br>");
//  document.write(largerNubmer(7,6)+"<br>");


// function smallerNubmer(firstNum , secNum , therdNum){
//     let minNum=firstNum;
//     if(minNum<secNum && minNum<therdNum)
//     {   
//        return firstNum;
//     }
//     else if(firstNum>secNum)
//     {
//         minNum=secNum;
//         if(minNum<=therdNum)
//         {
//             return secNum;
//         }
//     }
//     else if(therdNum<=secNum){
//         minNum=therdNum;
//         return therdNum;
//     }
//     else{
//         return minNum;
//     }
// }

// document.write(smallerNubmer(8,6,7)+"<br>");
// document.write(smallerNubmer(5,99,34)+"<br>");
// document.write(smallerNubmer(5,99,3)+"<br>");
// document.write(smallerNubmer(5,3,3)+"<br>");


function shorterString(string1, string2, string3, string4, string5) {
  let strings = [string1, string2, string3, string4, string5];

  let shortest = strings[0];

  for (let i = 1; i < strings.length; i++) {
    if (strings[i].length < shortest.length) {
      shortest = strings[i];
    }
  }
  return shortest;
}


document.write(shorterString("air","school","car","by","github") + "<br>");
document.write(shorterString("air","tr","car","by","github") + "<br>");
document.write(shorterString("by","tr","car","air","github") + "<br>");
document.write(shorterString("air","by","car","school","github") + "<br>");
document.write(shorterString("air","tr","by","car","github") + "<br>");
document.write(shorterString("air","tr","car","github","by") + "<br>");

// function isEven(number){
//     if(number%2==0)
//     {
//         return true;
//     }
//     else{
//         return false;
//     }

// }

// document.write(isEven(1) +"<br>");
// document.write(isEven(2) +"<br>");
// document.write(isEven(3) +"<br>");
// document.write(isEven(4) +"<br>");



// function isOdd(number){
//     if(number%2==0)
//     {
//         return false;
//     }
//     else{
//         return true;
//     }

// }

// document.write(isOdd(1) +"<br>");
// document.write(isOdd(2) +"<br>");
// document.write(isOdd(3) +"<br>");
// document.write(isOdd(4) +"<br>");



// function fullName(firstName , lastName)
// {
//     document.writeln(firstName + "  "+ lastName + "<br>");
// }

// fullName("Adam","McCallen");
// fullName("Alex", "Mercer");



// function average(num1 , num2, num3 , num4 , num5){
//     let sum= num1+num2+num3+num4+num5 ;
//     let avg= sum/5;
// document.write("= " + avg +"<br>")
// }
// average(1,2,3,4,5);
// average(5,7,9,3,5);



// function randomNumber(){
//     let randomNum = Math.random();
//     document.write(randomNum +"<br>");
// }

// randomNumber();
// randomNumber();
// randomNumber();
// randomNumber();




// function randomBetweenNumbers(num1 , num2)
// {
//     document.write(Math.floor(Math.random()*num2)+num1+"<br>")
// }

// randomBetweenNumbers(1,8);
// randomBetweenNumbers(3,100);
// randomBetweenNumbers(50,100);


// function scoreInUniversty(gpa){
// if(gpa>=95 && gpa<100)
// {
//     return "A";
// }
// else if(gpa>=85 && gpa<=94)
// {
//     return "B"; 
// }
// else if(gpa>=70 && gpa<=84)
// {
//     return "C"; 
// }
// else if(gpa>=50 && gpa<=69)
// {
//     return "D"; 
// }
// else 
// {
//    return "F";  
// }

// }

// document.write(scoreInUniversty(96)+"<br>");
// document.write(scoreInUniversty(3)+"<br>");
// document.write(scoreInUniversty(71)+"<br>");




// let a =0;
// function coun(){
    
//     a++;
//     return a;
// }

// function resetCounter(){
//     let b =a;
//     a=0;
//     return b;
// }

// document.write(coun()+"<br>");
// document.write(coun()+"<br>");
// document.write(coun()+"<br>");

// document.write(resetCounter()+" and the counter reset now<br>");
// document.write(coun()+"<br>");
// document.write(coun()+"<br>");

// document.write(resetCounter()+" and the counter reset now<br>");
// document.write(coun()+"<br>");