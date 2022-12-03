let d = document.forms['frm'];
let myData = [];

function display() {
    let ob = {};
    
    clearErrors();   
    let validation = true;
    for (let i = 0; i < d.length; i++) {
        switch (d.elements[i].type) {
            case "radio":
                if (d.elements[i].checked) {
                    ob[d.elements[i].name] = d.elements[i].value;
                }
                break
            case 'checkbox':

                if (d.elements[i].checked) {

                    if (typeof ob[d.elements[i].name] == 'undefined') {
                        ob[d.elements[i].name] = [d.elements[i].value];
                    } else {
                        ob[d.elements[i].name].push(d.elements[i].value);
                    }
                }
                break;
            default:
                ob[d.elements[i].name] = d.elements[i].value;
                break;
        }

    }
    for (const i in d) {

        if (d.elements[i] !== undefined) {

            switch (d.elements[i].type) {
                case "text":
                    if (d.elements[i].value.length == 0) {
                        seterror(i, "*Length of cannot be zero!");
                        validation = false;
                    }
                    break;
                case "email":
                    if (d.elements[i].value.length == 0) {
                        seterror(i, "*Length of email cannot be zero!");
                        validation = false;

                    }
                    break;
                    case "radio":
                        if (d.elements[i].checked !== true) {
                            seterror(i, "*Length of cannot be zero!");
                            validation = false;
                       }
                    break
            }
        } 

    }
        if (validation == true) {
            myData.push(ob);
        }

        const printTable = myData.map(function (value, index) {
            return `<tr> ${displayTableData(value)} </tr>`;
        });

        document.getElementById("test").innerHTML = printTable.join(" ");


    }

    displayTableData = (value) => {
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


    checkNumber = (evt) => {
        var charCode = (evt.which) ? evt.which : event.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;

        return true;
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