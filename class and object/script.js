let validate = true;
let myArray = [];
let mykey = [];

class myLogin{
    

    constructor (entity,data){
        this.entity = entity;
        this.data = data;
    }
    getData(){
    
        fetch("http://localhost:4000/accounts/"+this.entity, {
            method: 'POST',
            body: JSON.stringify(this.data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(y => y.json())
            .then(y => {
    
                localStorage.setItem("token", JSON.stringify(y))
                console.log(y);
                display(y);            
            })
    
    }

    
    
}


display = (myJson) => {
    myArray = myJson;

    document.getElementById('theadP').innerHTML = "";
    document.getElementById('tbodyP').innerHTML = "";
    for (const key in myArray) {
        if (key != "jwtToken") {
            // console.log(iterator);
            document.getElementById('theadP').innerHTML += `<th>${key}</th>`
        }
    }

    for (const key in myArray) {

        if (key != "jwtToken") {
            // console.log(key);
            document.getElementById('tbodyP').innerHTML += `<td>${myArray[key]}</td>`
        }
    }

}


login = () =>{
    validation();

    let myData = {

        "email": document.getElementById("email").value,
        "password": document.getElementById("password").value
    
    }
    
    let myObj = new myLogin("authenticate",myData);
    if(validate == true){
    myObj.getData();
    }
     
}
signUp = () =>{
    validation();

    let myData = {
        title: document.getElementById("title").value,
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        confirmPassword: document.getElementById("confirmPassword").value,
        acceptTerms: true
    }

    let myObj = new myLogin("register",myData);
    // myObj.getData();
    
    if(validate == true) {
        myObj.getData();
    }
}


/* ------------------------ validation form ------------------------*/

let frm = document.forms['frm1'];

validation = () => {

    clearErrors();
    validate = true;
    for (let i=0;i<frm.length;i++) {
        
        if (frm.elements[i] !== undefined) {
            
            switch (frm.elements[i].type) {
                case 'text':

                if (frm.elements[i].value == '') {
                        seterror(i, "*Length of cannot be zero!");
                        validate = false;
                    }

                    break;
                case 'email':
                    if (frm.elements[i].value.length == 0) {
                        seterror(i, "*Length of cannot be zero!");
                        validate = false;
                    }

                    break;
                case 'password':
                    if (frm.elements[i].value.length == 0) {
                        seterror(i, "*Length of cannot be zero!");
                        validate = false;
                    }
                    break;
            }

        }

    }

}


clearErrors = () => {
    errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }
}

seterror = (i, error) => {

    document.getElementsByClassName('formerror')[i].innerHTML = error;

}