//97-122 (lower)
            //65-90 (upper)

            var lengthOfPassword = prompt("What is the length of the password?");
            var specialChar = prompt("Would you like special character included?");
            var numericChar = prompt("Would you like numeric value included? ");
            var lowerCase = prompt("Would you like lower case included?");
            var upperCase = prompt("Would you like upper case included?");
            var password="";

           function getRandomNumberBetweenTwoValues (min, max){
              return Math.floor(Math.random() * (max - min + 1) + min);
           }
    
            var specialChar=["#","$","!","@","&","*","^"];

           while(lengthOfPassword>=1){
               if(specialChar){
               password+=specialChar[getRandomNumberBetweenTwoValues(0,specialChar.length)];
               lengthOfPassword--;
               }
               if(upperCase){
               password+=String.fromCharCode(getRandomNumberBetweenTwoValues(65,90));
               lengthOfPassword--;}
               if(lowerCase){
               password+=String.fromCharCode(getRandomNumberBetweenTwoValues(97,122));
               lengthOfPassword--;}
               if(numericChar){
               password+=getRandomNumberBetweenTwoValues(1,10);
               lengthOfPassword--;}
           }
         
       console.log(password);
      
       



       var textBox=document.querySelector("#textArea").innerHTML;
       textBox.innerHTML=password;