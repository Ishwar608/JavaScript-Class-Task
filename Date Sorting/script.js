let myObj = [
    {
        name : "Ishwar Suthar",
        mobile : "7734832608",
        Dob : "12/11/2000" 
    },
    {
        name : "lily",
        mobile : "9958754658",
        Dob : "08/24/1999" 
    },
    {
        name : "Vivek Bhai",
        mobile : "6325887778",
        Dob : "09/07/1993" 
    },
    {
        name : "Kajal Bhai",
        mobile : "6325887778",
        Dob : "05/20/2001" 
    }
]


const display = (myObj) =>{
    let text = [];
    for (const key in myObj[0]) {
        text.push(key);
    }
    document.getElementById("thead").innerHTML = text.map((key)=>{
        return `<th>${key}</th>`
    }).join("");

    document.getElementById('tbody').innerHTML = myObj.map((value)=>{
        let val = '';
        for (const key in value) {
            val += `<td>${value[key]}</td>`;
        }
        
        return `<tr>${val}</tr>`;
    }).join("");
}

const sortDate = () =>{

    let sortMyData = myObj.sort((a,b)=>{
        if(new Date(a.Dob) > new Date(b.Dob)){
            return 1;
        }
        else{
            return -1;
        }
    })
    
    // for (const iterator in myObj) {
    //     console.log(new Date(myObj[iterator].Dob))
    // }
    display(sortMyData);
}
display(myObj);