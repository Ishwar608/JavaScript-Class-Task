

let myPromise = entity => new Promise((sucess , reject) => {

   fetch("https://jsonplaceholder.typicode.com/" + entity)
    .then(y=>{
      if(y.ok == false){
        reject("Data Not Found");
      }
      return y.json()
    })
    .then(y=>{
        sucess(y);
    })

});

  display = (myData) =>{

    for (const key in myData[0]) {
    document.getElementById("head").innerHTML += `<th>${key}</th>`;
  }
   document.getElementById("data").innerHTML = myData.map((value)=>{
     let text = '';
     
     for (const key in value) {
       text += `<td>${value[key]}</td>`;
      }
      
      return `<tr>${text}</tr>`;
   }).join(""); 
  
} 


      myPromise("posts").then(p=>display(p)).catch(y=>console.log(y));