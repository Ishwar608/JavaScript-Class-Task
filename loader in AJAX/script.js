
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function (){
    if(xhttp.readyState <= 3){

        document.getElementById("myLoader").style.display = "block";
    }else{

        document.getElementById("myLoader").style.display = "none";
    }
        
}

xhttp.onload = function() {
    let y = JSON.parse(this.responseText);
        display(y);
}
xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhttp.send();

display = (myData) =>{

    let key = '';
    for (const iterator in myData[0]) {
        key += `<th>${iterator}</th>`;
    }
    document.getElementById("tblhead").innerHTML = key;

    document.getElementById("tblbody").innerHTML = myData.map((element)=>{
        let text = '';

        for (const key in element) {
            text += `<td>${element[key]}</td>`;
        }

        return `<tr>${text}</tr>`;
    }).join("");
}
