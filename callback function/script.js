let data1 = [];
let data2 = [];
fatechData = (url,callBackFun) =>{
    fetch(url).then(y=>y.json())
    .then(y=>{
        callBackFun(y);
    })
}

firstData = (frst) =>{
data1=frst;
}
secondData = (scnd) =>{
    data2 = scnd;
    for(let i=0 ; i < scnd.length; i++){
        data2[i]['name'] = data1[i].name;
    }
    for (const key in data2[0]) {
        document.getElementById("tblhead").innerHTML += `<th>${key}</th>`;
    }
    document.getElementById("tblbody").innerHTML = data2.map((element)=>{
        let text = "";
        for (const key in element) {
          text += `<td>${element[key]}</td>`;
        }
        return `<tr>${text}</tr>`;
    }).join("");
}
    

fatechData("https://jsonplaceholder.typicode.com/comments",firstData);
fatechData("https://jsonplaceholder.typicode.com/albums",secondData);
