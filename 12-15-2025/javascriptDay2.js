 /*function fact(num) //5
 {let number=1;
     for( let i =num ;i>=1 ;i--)
    {
            number= number*i;
    }
    return number; 
 }

 console.log( fact(5));
 console.log( fact(4));
 console.log( fact(3));
 console.log( fact(2));
  */
 function printNum(num) //5
 { 
    let sumEven=0;
    let sumOdd=0;
    for(let i=1; i<=num ; i++)
    {
        if(i%2==0)//even number
        { 
          sumEven+=i;   //2+4=6 
        }
        else
        {
           sumOdd+=i;  //1+3+5=9
        }  
    }
    return { sumEven , sumOdd};
   
 }

  const result = printNum(5);  

    console.log(result);                  
    console.log("Sum of Odd :", result.sumOdd);   // 9
    console.log("Sum of Even :", result.sumEven); // 6

