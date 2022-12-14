// let d = document.forms['frm'];

let getData = '';
let isEdit = -1;

Submit = () =>{
    document.getElementById('error').innerHTML =""; 
   if(document.getElementById('fname').value.length == 0){
    document.getElementById('error').innerHTML = "con't blank Please Fill the Field"
   }
   else{

       if(localStorage.getItem('Name') == null){
           
           localStorage.setItem("Name",document.getElementById('fname').value);
       }
       else{
           let newData = localStorage.getItem('Name').split(",");
           if(isEdit != -1){
            newData[isEdit]=document.getElementById('fname').value;
            localStorage.setItem('Name',newData.toString());

           }
           else{
               
            newData.push(document.getElementById('fname').value);
               
               localStorage.setItem('Name',newData.toString());
           }
           isEdit=-1;
       }
   }
   
    // console.log(localStorage.getItem('Name'));
    display();
}


display = () =>{
     getData = localStorage.getItem('Name').split(",");
    
    

    document.getElementById("dis").innerHTML = getData.map((element,index)=>{
        return `<div><p class="con">${element}</p><button onclick="deleteName(${index})">Delete</button><button onclick="editName(${index})">Edit</button></div>`
    }).join("");
     
    
}

deleteName = (i) =>{
    getData.splice(i,1);

    localStorage.setItem('Name',getData.toString());
    // console.log(getData);
    display();
}

editName = (i) =>{
    isEdit = i;
    document.getElementById('fname').value=getData[i];
}