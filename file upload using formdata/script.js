let myJson =[];
const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
   myJson = JSON.parse(this.responseText);
//    console.log(myJson);
   getFileD(myJson)
}
xhttp.open("GET", "http://localhost:8080/files/");
xhttp.send();


    let myArray = [];
    getFileD = (data) => {
        let key = [];
        myArray = data;
        for (const k in data[0]) {
           key.push(k);
        }
        key.push("Download");
        for (const kay of key) {
            document.getElementById("theadP").innerHTML += `<th>${kay}</th>`;
        }
        
        document.getElementById("tbodyP").innerHTML = data.map((element)=>{
            let text = '';
            for (const key in element) {
                text += `<td>${element[key]}</td>`;
            }

            return `<tr>${text}<td><a href="${element.url}"><button class="btn">Download</button></a></td></tr>`;
        }).join("");
    }


uploadFile = () => {
    var files = document.getElementById("file").files;
    var mydata = new FormData();
    mydata.append("file", files[0]);


    fetch("http://localhost:8080/upload", {
        method: "post",
        body: mydata

    }).then(y => y.json()).then(y => {
        console.log(y);
    })

}


// Ddownload = (index) =>{
//     let URL = myArray[index].url;
//     // console.log(URL);
// window.location.assign(URL);

// }
