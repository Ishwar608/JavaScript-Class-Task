let myArray = [];

let mykey = [];

class myModul{
    

    constructor (entity,data){
        this.entity = entity;
        this.data = data;
    }
    getData(){
    
        fetch("http://localhost:4000/accounts/"+this.entity, {
            method: 'POST',
            body: JSON.stringify(this.data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(y => y.json())
            .then(y => {
    
                localStorage.setItem("token", JSON.stringify(y))
                console.log(y);
                display(y);            
            })
    
    }

    display = (myJson) => {
        myArray = myJson;
    
        document.getElementById('theadP').innerHTML = "";
        document.getElementById('tbodyP').innerHTML = "";
        for (const key in myArray) {
            if (key != "jwtToken") {
                // console.log(iterator);
                document.getElementById('theadP').innerHTML += `<th>${key}</th>`
            }
        }
    
        for (const key in myArray) {
    
            if (key != "jwtToken") {
                // console.log(key);
                document.getElementById('tbodyP').innerHTML += `<td>${myArray[key]}</td>`
            }
        }
    
    }
    
    
}

export default myModul;