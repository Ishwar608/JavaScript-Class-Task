// let d = document.forms['frm'];

let getData = '';

Submit = () =>{
    
   if(document.getElementById('fname').value.length == 0){
    alert("Plaese  Enter Name")
   }
   else{

       if(localStorage.getItem('Name') == null){
           
           localStorage.setItem("Name",document.getElementById('fname').value);
       }
       else{
           let newData = localStorage.getItem('Name');
           
           let myData = newData.split(" ");
           
           myData.push(document.getElementById('fname').value);
           
           localStorage.setItem('Name',myData.toString());
       }
   }
   
    // console.log(localStorage.getItem('Name'));
    display();
}


display = () =>{
     getData = localStorage.getItem('Name').split(",");
    
    

    document.getElementById("dis").innerHTML = getData.map((element,index)=>{
        return `<div>${element}<button onclick="deleteName(${index})">Delete</button><button onclick="editName(${index})">Edit</button></div>`
    }).join("");
     
    
}

deleteName = (i) =>{
    getData.splice(i,1);

    localStorage.setItem('Name',getData.toString());
    // console.log(getData);
    display();
}
let a = 0;

// editName = (i) =>{
    
//     if(a==1){
//         getData[i]= document.getElementById('fname').value;
        
//     }
//     {

//         document.getElementById('fname').value = getData[i];
        
//     }

//     console.log(getData);
//     console.log(a);
// }