let myData1 = [];
let myData2 = [];
const xhttp = new XMLHttpRequest();

xhttp.onload = function() {
    let myJson = JSON.parse(this.responseText);
    myData1 =myJson;
}
xhttp.open("GET", "https://jsonplaceholder.typicode.com/albums",false);
xhttp.send();

xhttp.onload = function() {
    let myJson = JSON.parse(this.responseText);
     myData2 = myJson;
}
xhttp.open("GET", "https://jsonplaceholder.typicode.com/comments",false);
xhttp.send();


display = () =>{
    let key = '';

    for(let i=0 ; i < myData1.length; i++){
        myData1[i]['name'] = myData2[i].name;
    }

    for (const i in myData1[0]) {
        key += `<th>${i}</th>`;
    }
    document.getElementById("tblhead").innerHTML = key;

    document.getElementById("tblbody").innerHTML = myData1.map((element)=>{
        let text = "";
        for (const key in element) {
           text += `<td>${element[key]}</td>`;
        }
        return `<tr>${text}</tr>`;
    }).join("");
}
display();