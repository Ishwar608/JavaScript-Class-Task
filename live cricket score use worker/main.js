function scoreData() {
      w = new Worker("myapi.js");
    
    w.onmessage = function(event) {
        
    
   console.log(event.data);
   document.getElementById("heading").innerHTML = `${event.data[0].name}`
    document.getElementById("dis").innerHTML = `
        <div class="team1">
                <p class="tnam">${event.data[0].teamInfo[0].shortname}</p>
                <img src="${event.data[0].teamInfo[0].img}" class="logo1" width="55px">
            </div>
            <div class="score">
                <div class="item">
                    <div class="tname">
                        <span>${event.data[0].score[0].r}-${event.data[0].score[0].w}</span>
                        <span>${event.data[0].score[0].o}</span>
                    </div>
                    <div class="liveT">
                        <p>${event.data[0].score[0].inning}</p>
                    </div>
                </div>
            </div>
            <div class="team2">
                <img src="${event.data[0].teamInfo[1].img}" alt="" width="55px">
                <p class="tnam">${event.data[0].teamInfo[1].shortname}</p>
            </div>
        `;

    };
       
  }

  scoreData();