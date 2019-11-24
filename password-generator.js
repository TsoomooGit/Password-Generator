
function m(){
            var lengthOfPassword = parseInt(prompt("What is the length of the password?"));
           
           function getRandomNumberBetweenTwoValues (min, max){
              return Math.floor(Math.random() * (max - min + 1) + min);
           }
    
         
         if(lengthOfPassword<=0){
         alert("ERROR: Password length must be more than 0!");
         return;
         //textBox.innerHTML="User has to enter password length more than1";
         }else{
            var specialChar = Boolean(confirm("Would you like special character included?"));
            var numericChar = Boolean(confirm("Would you like numeric value included? "));
            var lowerCase = Boolean(confirm("Would you like lower case included?"));
            var upperCase = Boolean(confirm("Would you like upper case included?"));
            var password="";
            var arr=[];
            var specialChars=["#","$","!","@","&","*","^"];

            if(specialChar==true || numericChar==true || lowerCase==true || upperCase==true){
        if(specialChar){
         for(var i=0; i<specialChars.length; i++){
            arr.push(specialChars[i]);
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
           
         while(lengthOfPassword>=1){
            var index=getRandomNumberBetweenTwoValues(0,arr.length-1);
            password+=arr[index];
            lengthOfPassword--;
         }
      }else{
         alert("ERROR: At lease one type must be selected!");
         return;
      }
     
         }
           return password;
        }
         

   
       
       var textBox=document.querySelector("#textArea");
       var button=document.querySelector("#generatePasswordButton");
       button.addEventListener("click",function(){
       textBox.innerHTML=m();
       });

       

       var copyButton=document.querySelector("#copy");
       copyButton.addEventListener("click",function(){
         var copyText = document.getElementById("textArea");
         copyText.select();
         copyText.setSelectionRange(0, 99999)
         document.execCommand("copy");
         alert("Copied the text: " + copyText.value);
       });