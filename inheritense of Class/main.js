let myArray = [];
class getData {
    constructor(url) {
        this.url = fetch(url).then(y => y.json()).then(y => this.getPrint(y));

    }
    getPrint(data) {
        myArray = data;
        display(myArray);        
    }
}
class filterData extends getData {
    fltrData() {
        let txt = document.getElementById("txt").value;


        let filterData = myArray.filter((element) => {

            let newData = Object.values(element).join(" ");

            return newData.indexOf(txt) >= 0;
        })

        console.log(filterData);
        
        display(filterData);

    }
}

let obj = new filterData("https://jsonplaceholder.typicode.com/posts");

document.getElementById("srch").addEventListener("click", obj.fltrData)


display = (data) =>{
    let ka = Object.keys(data[0]);
    document.getElementById("tblhead").innerHTML = "";
    for (const k of ka) {
        document.getElementById("tblhead").innerHTML += `<th>${k}</th>`;
    }
    document.getElementById("tblbody").innerHTML = "";
    document.getElementById("tblbody").innerHTML = data.map((element) => {
        let text = '';
        for (const key in element) {
            text += `<td>${element[key]}</td>`;
        }
        return `<tr>${text}</tr>`;
    }).join("");
}