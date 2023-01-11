let myData = [];
const getData = async function* () {
    let perPage = 20;
    let offset = 0;
    let data = await (await fetch("https://jsonplaceholder.typicode.com/posts")).json();
    let totalPage = Math.ceil(data.length / perPage);
    let totalCount = data.length;
    disButton(totalPage);
    console.log(totalPage);
    while (offset === 0 || offset < totalCount) {
        try {
            yield data.splice(offset, perPage);
            offset = offset + perPage;

        } catch (e) {
            console.log("exception during fetch", e);
            yield {
                done: true,
                value: "error"
            };
        }
    }
}

// disPage = (data) =>{
//     myData = data;
//     display(0,perPage);  
// }

display = (data) => {
    let keys = Object.keys(data[0]);
    for (const key of keys) {
        document.getElementById("tbl-head").innerHTML += `<th>${key}</th>`
    }

    document.getElementById("tbl-body").innerHTML = data.map((element) => {
        let test = '';
        for (const dt in element) {
            test += `<td>${element[dt]}</td>`;
        }
        return `<tr>${test}</tr>`;
    }).join("");
}

disButton = (end) => {
    document.getElementById('btn').innerHTML = "";
    for (let i = 1; i <= end; i++) {
        document.getElementById('btn').innerHTML += ` <button onclick="pageButton(${i})">${i}</button>`;
    }
}
pageButton = async () => {
    const page = await getData();
    const content = await page.next();

    console.log(content);
    display(content.value);
}

pageButton();
