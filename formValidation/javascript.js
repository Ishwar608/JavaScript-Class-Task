let d = document.forms['frm'];
let myData = [];

function display() {
    let ob = {};

    for (let i = 0; i < d.length; i++) {
        switch(d.elements[i].type){
            case "radio":
                if(d.elements[i].checked){
                    ob[d.elements[i].name] = d.elements[i].value;    
                }
                break
            case 'checkbox':
                 
                 if(d.elements[i].checked){

                    if(typeof ob[d.elements[i].name]  == 'undefined'){
                        ob[d.elements[i].name] = [d.elements[i].value];
                    }else{
                        ob[d.elements[i].name].push(d.elements[i].value);   
                    } 
                }
                break;
            default:
                ob[d.elements[i].name] = d.elements[i].value;
                break;
        }
        switch(d.elements[i].name){
            case 'firstname':
                if (d.elements[i].value.length<5){
                    seterror("name", "*Length of name is too short");
                    returnval = false;
                }
            break;    
        }
    }

    myData.push(ob);

    const printTable = myData.map(function (value, index) {
        return `<tr> ${displayTableData(value)} </tr>`;
    });
    
    document.getElementById("test").innerHTML = printTable.join(" ");

   
 }

  displayTableData = (value) =>{
    let text = '';
    for (const key in value) {
        if (typeof value[key] === 'object') {
                text += `<td>${value[key]}</td>`;
        }
        else {
            text += `<td>${value[key]}</td>`;
        }
    }

    return text;
}


 checkNumber = (evt) =>
      {
         var charCode = (evt.which) ? evt.which : event.keyCode
         if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;

         return true;
      }


      clearErrors = () => {
        errors = document.getElementsByClassName('formerror');
        for(let item of errors)
        {
            item.innerHTML = "";
        }  
    }
    
     seterror = (id, error) => {
        //sets error inside tag of id 
        element = document.getElementById(id);
        element.getElementsByClassName('formerror')[0].innerHTML = error;
    
    }
    
     validateForm = () => {
        debugger;
        var returnval = true;
        clearErrors();
    
        //perform validation and if validation fails, set the value of returnval to false
        var name = document.forms['frm']["firstname"].value;
        if (name.length<5){
            seterror("name", "*Length of name is too short");
            returnval = false;
        }
    
        if (name.length == 0){
            seterror("name", "*Length of name cannot be zero!");
            returnval = false;
        }

        var lastname = document.forms['frm']["lastname"].value;
        if (lastname.length == 0){
            seterror("lastname", "*Length of name cannot be zero!");
            returnval = false;
        }
        var Address = document.forms['frm']["Address"].value;
        if (Address.length == 0){
            seterror("Address", "*Length of name cannot be zero!");
            returnval = false;
        }
        var Mobile = document.forms['frm']["Mobile"].value;
        if (Mobile.length == 0){
            seterror("Mobile", "*Length of name cannot be zero!");
            returnval = false;
        }
        if (Mobile.length != 10){
            seterror("Mobile", "*Phone number should be of 10 digits!");
            returnval = false;
        }
    
        var email = document.forms['frm']["Email"].value;
        if (email.length>15){
            seterror("email", "*Email length is too long");
            returnval = false;
        }
    
    
    
        return returnval;
    }