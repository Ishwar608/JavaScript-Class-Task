let myData = [];

fetch("https://jsonplaceholder.typicode.com/todos").then(y=>y.json()).then(y=>{
    displayPage(y);
})

function displayPage(y) { 
    myData = y;
    let perPage = 20;
    let totalPage = Math.ceil(y.length / perPage);

    disButton(1,totalPage);
    disData(0,perPage);
}

function disData(start,end) {
    let d = myData.slice(start,end);

    let myd = d.map((value)=>{
        return `<tr>
            <td>${value.userId}</td>
            <td>${value.id}</td>
            <td>${value.title}</td>
            <td>${value.completed}</td>
        </tr>`
    });

   document.getElementById('test').innerHTML = myd.join(" ");
//    console.log(myd);
}

function disButton(start , end) {

    for(i=start;i<=end;i++) {
         document.getElementById('btn').innerHTML += ` <button onclick="pageButton(${i})">${i}</button>`;
    }
}

function pageButton() {
    let pageSize = 20;
    let start = (currentPage-1)*pageSize;
    let end = start + pageSize;

    disData(start,end);
}