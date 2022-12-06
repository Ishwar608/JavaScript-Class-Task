let d = document.forms['frm'];
let myData = [];


 document.getElementById('btn').addEventListener('click',()=>{
     let creatediv = document.createElement('div');

     let sub = document.createElement('input');
     sub.placeholder = "Enter Your Subject Name";
     sub.name = "subject";

     let mark = document.createElement('input');
     mark.placeholder = "Enter Your Mark";
     mark.name = "marks";
     mark.addEventListener('keypress',(evt)=>{
        if (Number.isInteger(parseInt(evt.key))) {
            console.log(evt.key);
         }
         else{
             evt.preventDefault();
         }
     });

     creatediv.appendChild(sub);
     creatediv.appendChild(mark);

     document.getElementById('frm').appendChild(creatediv);
    
 });

 

 display = () =>{
    let ob = {};
    let keys =[];

   for (let i=0;i<d.length;i++) {
           ob[d.elements[i].name] = d.elements[i].value;
    }
             
     myData.push(ob);

    for (const key in myData[0]) {
        keys.push(key);
    }
   document.getElementById('tblhead').innerHTML = keys.map((k)=>{
        return `<th>${k}</th>`;
   }).join(" ");
   
   document.getElementById('tblbody').innerHTML = myData.map((v)=>{
    let text = '';
    for (const key in v) {
        text += `<td>${v[key]}</td>`; 
    }
    return `<tr>${text}</tr>`
   }).join(" ");
}