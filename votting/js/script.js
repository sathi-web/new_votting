let namefild = document.querySelector(".namefild");
let nameerr = document.querySelector(".nameerr")
let email = document.querySelector(".email");
let emailerr = document.querySelector(".emailerr");
let fname = document.querySelector(".fname");
let fnameerr = document.querySelector(".fnameerr");
let add = document.querySelector(".add");
let adderr = document.querySelector(".adderr");
let contact = document.querySelector(".contact");
let contacterr = document.querySelector(".contacterr");
let pass = document.querySelector(".pass");
let passerr = document.querySelector(".passerr");
let con_pass = document.querySelector(".con_pass");
let con_passerr = document.querySelector(".con_passerr");
let btun = document=querySelector(".btun");






let btn = document.querySelector(".btn");



btn.addEventListener("click",function(){
    if(namefild.value == ""){
        nameerr.innerHTML="please enter your name"
    }else{
        nameerr.innerHTML=""
    }
    if(email.value == ""){
        emailerr.innerHTML="please enter your email"
    }else{
        emailerr.innerHTML=""
    }
    if(contact.value == ""){
        contacterr.innerHTML="please enter your phone_number"
    }else{
        contacterr.innerHTML=""
    }
    if(fname.value == ""){
        fnameerr.innerHTML="please enter your phone_number"
    }else{
        fnameerr.innerHTML=""
    }
    if(add.value == ""){
        adderr.innerHTML="please enter your address"
    }else{
        adderr.innerHTML=""
    }
    if(pass.value == ""){
        passerr.innerHTML="please enter your password"
    }else{
        passerr.innerHTML=""
    }
    if(con_pass.value == ""){
       con_passerr.innerHTML="please enter your confirm_password"
    }else{
       con_passerr.innerHTML=""
    }
    if(pass.value == ""){
        passerr.innerHTML="please enter your password"
     }else if(pass.value!=con_pass.value){
        con_passerr.innerHTML="confirm password don't match"
     }
     else {
        passerr.innerHTML=""
     }

     
})
btun.addEventListener("click",function(){
    if(btun.value == password);
    pass.type="text"
    pass.innerHTML="show"
})