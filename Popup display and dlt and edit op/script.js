fetch("https://jsonplaceholder.typicode.com/posts").then(y => y.json())
    .then(myJson => display(myJson));

let myArray = [];
let dkey = [];
let edItem = -1;
display = (data) => {
    myArray = data;

    let kay = Object.keys(myArray[0]);
    kay.push("action");
    dkey = kay;
    let printKey = kay.map((val, index) => {
        return `
        <tr>
        <th>${val}</th>
        </tr>
        `
    });


    let printData = myArray.map((value,index) => {
        return `<tr>
        <td>${value.userId}</td>
        <td>${value.id}</td>
        <td>${value.title}</td>
        <td>${value.body}</td>
        <td>
        <button class="btn" onclick="deleteData(${index})">Delete</button>
        <button class="btn" onclick="editData(${index})">Edit</button>
        </td>
        
        </tr>`
    })
    document.getElementById('tblhead').innerHTML = printKey.join(' ');
    document.getElementById('tblbody').innerHTML = printData.join(' ');
}



deleteData = (index) =>{
    let text =  "Are you sure Delete content";

    if(confirm(text) == true){
        // console.log("Your data is delete");
        myArray.splice(index,1);
        display(myArray)
    }
}


editData = (index) =>{
    // console.log(myArray[index]);
    edItem = index;
 
    document.getElementById('userId').value = myArray[index].userId;
    document.getElementById('title').value = myArray[index].title;
    document.getElementById('body').value = myArray[index].body;

    
    document.getElementById("dis").style.display = "block";

}

saveData = () =>{
    if(edItem != -1){
        myArray[edItem].userId = document.getElementById('userId').value;
        myArray[edItem].title = document.getElementById('title').value;
        myArray[edItem].body = document.getElementById('body').value;
    }   
    document.getElementById("dis").style.display = "none";
    display(myArray);

}