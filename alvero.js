 function getHammingDistance(str1,str2) {
	var count=0;
	var newstring1;
	var newstring2;

  //convert strings to lowercase 
   str1=str1.toLowerCase();
   str2=str2.toLowerCase();
   
   if(str1.length!=str2.length){
    //strings don't have same length
   	console.error("Error! Strings are not equal!");
    return;
   }

   else{

   	    if(str1.length<=0||str2.length<=0){
           //strings have invalid length
           console.error("Invalid string length!");
           return;

   	    }

   	    else{
             //convert strings to arrays for conparison
             newstring1=str1.split("");
             newstring2=str2.split("");
   	    	 
   	    	 //increment hamming distance if strings differ in the current position 
   	    	  for(i=0;i<newstring1.length;i++){
              if(newstring1[i]!==newstring2[i])
   	    	     count++;
   	    	  }

   	    	  return count;
   	    }
   }
}

function countSubstrPattern(original,pattern){
var i;
var tempString;
var count=0;
var remaining;
  if(original.length<=0||pattern.length<=0){
     //strings have invalid input length
	    console.error("Error! Invalid input length!");
      return;
   }

  else{
      //loop to count the number of occurences of substring/pattern
       for(i=0;i<original.length;i++){
            remaining=original.substr(i);
            //return if remaining number of characters in string is less than the # of characters in the pattern
            if(remaining.length<pattern.length)
            return count;
              
            tempString=original.substr(i,pattern.length);//get susbtring at current position
            //substring matches pattern
            if(tempString===pattern)
            count++;
       }
   }   
}

function isValidString(str,alphabet){
    var valid;
    var i;
    var j;
    var str_temp;
    var alpha_temp;

    if(str.length<=0||alphabet.length<=0){
      //strings have invalid input length
      console.error("Error! Invalid input length!");
    }

    else{  

     //convert strings to arrays
      str_temp=str.split("");
      alpha_temp=alphabet.split("");
     
     //loop that checks if letters that were not in the alphabet were used in the string
      for(i=0;i<str_temp.length;i++){
        valid=false;
        for(j=0;j<alpha_temp.length;j++){
          if(str_temp[i]===alpha_temp[j]){
            valid=true;
          }
        }
        if(valid===false)
        return valid;
      }

      valid=true;
      return valid;       
   }
}

function getSkew(str,n){
   var i;
   var g=0;
   var c=0;
   var temp;
   var temp2= new Array(str.length);

   if(str.length===0){
      //invalid input length
     console.error("Error! Invalid string length!");
     return;
   }

   if(n<=0){
    //invalid input size
    console.error("Error! Invalid input!");
    return;
   }
    
   else{

   temp=str.toLowerCase();
   temp=temp.split("");//convert string to array
   i=0;
   temp2[i]='x';

   //copy contents of array to new array 
   for(i=1;i<=temp.length;i++){
     temp2[i]=temp[i-1];
   }
  
  //loop that counts the occurences of g and c
   for(i=1;i<=n;i++){
     if(temp2[i]==="g")
      g++;
     else if(temp2[i]==="c")
      c++;     
   }
  //return the skew
   return (g-c); 
  } 

}
function getMaxSkewN(str,n){
   var i;
   var g=0;
   var c=0;
   var temp;
   var temp2= new Array(str.length);
   var temp3;
   var max;

   if(str.length===0){
     //invalid input length
     console.error("Error! Invalid string length!");
     return;
   }

   if(n<=0){
    //invalid input size
    console.error("Error! Invalid input!");
    return;
   }
    
   else{
   temp=str.toLowerCase();
   temp=temp.split("");//convert string to array
   i=0;
   temp2[i]='x';
   //copy contents of array to new array
   for(i=1;i<=temp.length;i++){
     temp2[i]=temp[i-1];
   }
   //set initial value of max skew

    i=1
    max=0;

    if(temp2[i]==="g"){
    max=1;
    g++;
    }
    else if(temp2[i]==="c"){
    max=-1;
     c++;
    }
   
   temp3=0;

 //loop that counts the number of g's and c's and compares the current g-c to the max skew
   for(i=2;i<=n;i++){

     if(temp2[i]==="g")
      g++;

     else if(temp2[i]==="c")
      c++;

     temp3=g-c;

     //replace current max skew if larger value found
     if(temp3>max)
      max=temp3;    
   }

   return max; 

  } 

}

  function getMinSkewN(str,n){
   var i;
   var g=0;
   var c=0;
   var temp;
   var temp2= new Array(str.length);
   var temp3;
   var min;

   if(str.length===0){
    //invalid input length
     console.error("Error! Invalid string length!");
     return;
   }

   if(n<=0){
    //invalid input size
    console.error("Error! Invalid input!");
    return;
   }
    
   else{
   temp=str.toLowerCase();
   temp=temp.split("");//convert string to array
   i=0;
   temp2[i]='x';

   //loop to copy contents of array to new array
   for(i=1;i<=temp.length;i++){
     temp2[i]=temp[i-1];
   }

   //set initial value of min skew
    i=1  
    min=0;
   
    if(temp2[i]=="g"){
    min=1;
    g++;
    }
    else if(temp2[i]=="c"){
    min=-1;
    c++;
    }
   //loop that counts the number of g's and c's and compares the current g-c to the min skew
   for(i=2;i<=n;i++){
     if(temp2[i]==="g")
      g++;
     else if(temp2[i]==="c")
      c++; 
     temp3=g-c;
     //replace current min skew if larger value found
     if(temp3<min)
     min=temp3;    
   }
   return min; 
  } 
}
