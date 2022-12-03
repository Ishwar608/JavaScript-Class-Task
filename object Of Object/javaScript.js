fetch("https://jsonplaceholder.typicode.com/users")
.then(y=>y.json()).then(t=>display(t));

let myJson = [];
let arrayKey = [];
display = (data) =>{
    myJson = data;
    arrayOfKey();
    // let kay = Object.keys(myJson[0]);    

     document.getElementById('tblhead').innerHTML += arrayKey.map((tblKey)=>{
         return `<th>${tblKey}</th>`;
     }).join("");

    document.getElementById('tblbody').innerHTML += myJson.map((tblVal)=>{
        let val = '';        
        for (const key in tblVal) {
            if(typeof tblVal[key] === "object"){
                for (const key1 in tblVal[key]) {
                        if(typeof tblVal[key][key1] === "object"){
                            for (const key3 in tblVal[key][key1]) {
                            val += `<td>${tblVal[key][key1][key3]}</td>`

                            }
                            
                        }
                        else{
                            val += `<td>${tblVal[key][key1]}</td>`
                        }
                }
            }
            else{
                val += `<td>${tblVal[key]}</td>`
            }
        }
    return `<tr>${val}</tr>`;
    }).join('');

    arrayOfKey();
}

arrayOfKey = () =>{
//   arrayKey = Object.keys(myJson[0])

    for (const key in myJson) {
        if(key == 0){
            if(typeof myJson[key] === 'object'){
               
                for (const key1 in myJson[key]) {
                    if(typeof myJson[key][key1] === 'object'){
                        for (const key3 in myJson[key][key1]) {
                               arrayKey.push(key3);
                        }
                    }
                    else{

                        arrayKey.push(key1);
                    }
                }
            
            }
            
        
        }

    }
    // console.log(arrayKey);
}