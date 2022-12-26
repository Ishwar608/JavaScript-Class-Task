
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function (){
    document.getElementById("myLoader").style.display = "block";
    setTimeout(() => {
    document.getElementById("myLoader").style.display = "none";
        
    }, 2000);
}

xhttp.onload = function() {
    let y = JSON.parse(this.responseText);
    setTimeout(() => {            
        display(y);
        }, 2000);
    
}
xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts",false);
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
