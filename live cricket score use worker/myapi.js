

function myAPIData() {
    fetch("https://api.cricapi.com/v1/currentMatches?apikey=54ab95a7-4922-4a9f-9480-b02bc02a41f7&offset=0").then(y=>y.json()).then(y=>postMessage(y.data));

    
    setTimeout("myAPIData()",50000);
  }
  
  myAPIData();