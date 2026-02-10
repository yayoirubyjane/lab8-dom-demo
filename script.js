const title = document.getElementById("title");
const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const emailInput = document.getElementById("emailInput");
const output = document.getElementById("output");

//query selector
const description = document.querySelector('.description');
const button = document.querySelector('#btnClick');


button.addEventListener('click', ()=> {
    let name = nameInput.value;
    let age = ageInput.value;
    let email = emailInput.value;
    
    output.innerHTML = <h2> Button Clicked</h2>;


    //conditional statements
    if (age == 18){
        output.innerHTML += <p>Welcome ${name}, you are now an adult! loose equality</p>;
    }
    else{
        output.innerHTML += <p>Hello ${name}, you are now ${age} years old</p>;
    }

    if (age=== 18){
        output.innerHTML += <p>Welcome ${name}, you are now an adult! loose equality</p>;
    }
    else{
        output.innerHTML += <p>Hello ${name}, you are now ${age} years old</p>;
    }


    if (name != "" && age != "" && email!=""){
        output.innerHTML += <p>Hi ${name}, I am ${age} years old my email is ${email}</p>;
    }
    else{
        output.innerHTML += <p>Please fill all the fields</p>;
    }
});