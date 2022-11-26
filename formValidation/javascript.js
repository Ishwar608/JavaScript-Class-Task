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
    }
    myData.push(ob);

    const printTable = myData.map(function (value, index) {
        return `<tr> ${displayTableData(value)} </tr>`;
    });
    document.getElementById("test").innerHTML = printTable.join(" ");

   
 }
function displayTableData(value) {
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


function validation() {
   for(let i=0;i<d.length;i++) {
    if(d.elements[i].checked == false && d.elements[i].empty){
        alert("Please Fill Box");
        break;
    }
    else{
        display();
        break;
    }
   }
}

