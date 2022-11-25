let d = document.forms['frm'];
let myData = [];
let myJson = {};
let key1 = [];
let val = [];
let countBtn = 1;
function display() {
    // for(let i=0;i<d.length;i++) {
    // key1.push(d.elements[i].name);
    // val.push(d.elements[i].value);
    // }
    // for(let j=0;j<d.length;j++){
    //     myData.push({[key1[j]]:val[j]});
    // }


    for(let i=0;i<d.length;i++) {
              val.push(d.elements[i].name);
             val.push(d.elements[i].value);
        
        }
        myData.push(val); 
     val=[];   
    console.log(myData);
    console.log(myJson);

// console.log(myData);
// const printTable = myData.map(function (value, index) {
//     return `<tr> ${displayTableData(value)} </tr>`;
// });
// document.getElementById("test").innerHTML = printTable.join(" ");

}



function displayTableData(value) {
    let text = ''; 
    for (const key in value) {
            text += `<td>${value[key]}</td>`;
            }
        
    return text;
}

