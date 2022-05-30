let pwdEL = document.getElementById("pwd1")
let pwd2EL = document.getElementById("pwd2")
let pwd3EL = document.getElementById("pwd3")
let pwd4EL = document.getElementById("pwd4")
let randomArithmeticObject = [1,2,3,4,5,6,7,8,9,0,'a','b','c','d','x','z','+','-','!','=','>','<','@','#','q','r','s','t']
let pwd = ""
let pwd2 = ""
function generatePassword(){
    for(i = 0;i < 15;i++){
        let randomNumber = Math.floor(Math.random() * 28)
        let pwdChar = randomArithmeticObject[randomNumber]
        pwd += pwdChar
        pwdEL.innerText = pwd
        }
        pwd = 0;
        
    for(i = 0;i < 15;i++){
        let randomNumber = Math.floor(Math.random() * 28)
        let pwdChar = randomArithmeticObject[randomNumber]
        pwd += pwdChar
        pwd2EL.innerText = pwd
        }
        pwd = 0;
        
    for(i = 0;i < 15;i++){
        let randomNumber = Math.floor(Math.random() * 28)
        let pwdChar = randomArithmeticObject[randomNumber]
        pwd += pwdChar
        pwd3EL.innerText = pwd
        }
        pwd = 0;
        
    for(i = 0;i < 15;i++){
        let randomNumber = Math.floor(Math.random() * 28)
        let pwdChar = randomArithmeticObject[randomNumber]
        pwd += pwdChar
        pwd4EL.innerText = pwd
        }
        pwd = 0;
}