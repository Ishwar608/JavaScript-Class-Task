fetch("http://localhost:8080/files/").then(y => y.json())
    .then(myJson => getFileD(myJson));
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
        
        document.getElementById("tbodyP").innerHTML = data.map((element,index)=>{
            let text = '';
            for (const key in element) {
                text += `<td>${element[key]}</td>`;
            }

            return `<tr>${text}<td><button class="btn" onclick=Ddownload(${index})>Download</button></td></tr>`;
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

    console.log(files);

}


Ddownload = (index) =>{
    let URL = myArray[index].url;
    // console.log(URL);
window.location.assign(URL);

}
