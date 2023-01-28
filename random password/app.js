var passwordGen = document.querySelector(".password");
          
/* Function to generate combination of password */
function generatePassword() {
    var password = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
            'abcdefghijklmnopqrstuvwxyz0123456789@#$';
      
    for (let i = 0; i <= 16; i++) {
        var char = Math.floor(Math.random()
                    * str.length + 1);
          
        
       
        password += str.charAt(char)
    }
      
    return passwordGen.innerHTML=password;
}
  
