
function m(){
            var lengthOfPassword = prompt("What is the length of the password?");
            var specialChar = Boolean(confirm("Would you like special character included?"));
            var numericChar = Boolean(confirm("Would you like numeric value included? "));
            var lowerCase = Boolean(confirm("Would you like lower case included?"));
            var upperCase = Boolean(confirm("Would you like upper case included?"));
            var password="";

           function getRandomNumberBetweenTwoValues (min, max){
              return Math.floor(Math.random() * (max - min + 1) + min);
           }
    
            var specialChar=["#","$","!","@","&","*","^"];

            var arr=[];
         //0 or <0 alert
         //user has to select 1 from boolean
         
        if(specialChar){
         for(var i=0; i<specialChar.length; i++){
            arr.push(specialChar[i]);
         }
         }
         if(upperCase){
         for(var i=65; i<=90; i++){
            arr.push(String.fromCharCode(i));
         }
      }

         if(lowerCase){
         for(var i=97; i<=122; i++){
            arr.push(String.fromCharCode(i));
         }
      }

         if(numericChar){
         for(var i=0; i<=9; i++){
            arr.push(i);
         }
         }

         console.log("start")
         for(var i=0; i<arr.length; i++){
            console.log(arr[i]);
         }
         console.log("end");

           while(lengthOfPassword>=1){
              var index=getRandomNumberBetweenTwoValues(0,arr.length-1);
              password+=arr[index];
              console.log("Adding: "+password);
              lengthOfPassword--;
           }
          // console.log(password);

     

           return password;
        }
         

        
       var textBox=document.querySelector("#textArea");
    
       var button=document.querySelector("#b");
       button.addEventListener("click",function(){
         
       textBox.innerHTML=m();
       });