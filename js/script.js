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
let btun = document.querySelector(".btun");
let btunn = document.querySelector(".btunn");
let textarea = document.querySelector("textarea");
let ptext = document.querySelector("ptext");


// (/^\w+([\.-]?\w+)*@([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;



let btn = document.querySelector(".btn");



btn.addEventListener("click",function(){
    if(namefild.value == ""){
        nameerr.innerHTML="please enter your name"
    }else{
        nameerr.innerHTML=""
    }
    if(email.value == ""){
        emailerr.innerHTML="please enter your email"
    }else if(!email.value.match(regex)){
        emailerr.innerHTML="not formet match"
    }
    if(contact.value == ""){
        contacterr.innerHTML="please enter your phone_number"
    }else{
        contacterr.innerHTML=""
    }
    if(fname.value == ""){
        fnameerr.innerHTML="please enter your father's name"
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
    if(pass.type=="password"){
        pass.type="text"
        btun.innerHTML='<i class="fa-regular fa-eye"></i>'
    }else{
        pass.type="password"
        btun.innerHTML='<i class="fa-solid fa-eye-slash"></i>'
    }

})
btunn.addEventListener("click",function(){
    if(con_pass.type=="password"){
        con_pass.type="text"
        btunn.innerHTML='<i class="fa-regular fa-eye"></i>'
    }else{
        con_pass.type="password"
        btunn.innerHTML='<i class="fa-solid fa-eye-slash"></i>'
    }
});
// const allListener = ()=>{
//      textarea.addEventListener("input",function(){
//         let length = textarea.value.length;
//         if(length>200){

//               console.log("crose your limit");
//         }else{
//             ptext.innertext = length +"/200"
//         }
//      })
// }
