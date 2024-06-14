

let username="";
let email="";
let password="";

const Username = (a)=>{
username=a;
}

const Email = (a)=>{
email=a;
}
const Password =(a)=>{
    password=a;
}
let usernameError=document.getElementById('usernameError');
let emailError=document.getElementById('emailError');
let passwordError=document.getElementById('passwordError');

submit =()=>{

if(username.length>0 && email.length>0 && password.length>0){
    if(username.length<=10){
        usernameError.innerText='Username must be 10 characters !';
    }
    if(email.length<=10){
        emailError.innerText='Email must be 10 characters !';
    }
    if(password.length<=10){
        passwordError.innerText='Password must be 10 characters !';
    }
}
else{
    if(username==0){
        usernameError.innerText='Username cannot be empty !';
    }
    if(email==0){
        emailError.innerText='Email cannot be empty !';
    }
    if(password==0){
        passwordError.innerText='Password cannot be empty !';
    }
}
}


