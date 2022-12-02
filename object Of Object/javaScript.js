fetch("https://jsonplaceholder.typicode.com/users")
.then(y=>y.json()).then(t=>display(t));

display = (data) =>{
    let kay = Object.keys(data[0]);

    document.getElementById('tblhead').innerHTML += kay.map((tblKey)=>{
        return `<th>${tblKey}</th>`;
    }).join("");

    document.getElementById('tblbody').innerHTML += data.map((tblVal)=>{
        let val = '';        
        for (const key in tblVal) {
            if(typeof tblVal[key] === "object"){
                for (const key1 in tblVal[key]) {
                val += `<td>${tblVal[key][key1]}</td>`
                }
            }
            else{
                val += `<td>${tblVal[key]}</td>`
            }
        }
    return `<tr>${val}</tr>`;
    }).join('');
}