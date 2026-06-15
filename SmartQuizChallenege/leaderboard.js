let scores =
JSON.parse(localStorage.getItem("leaderboard"))
|| [];

scores.sort((a,b)=>b-a);

const list =
document.getElementById("leaderboardList");

scores.forEach((score,index)=>{

let li =
document.createElement("li");

li.innerHTML =
"Rank " + (index+1) +
" ➜ Score : " + score + "/10";

list.appendChild(li);

});

document.getElementById("firstPlace")
.innerText =
scores[0] ? scores[0] + "/10" : "--";

document.getElementById("secondPlace")
.innerText =
scores[1] ? scores[1] + "/10" : "--";

document.getElementById("thirdPlace")
.innerText =
scores[2] ? scores[2] + "/10" : "--";

function goHome(){

window.location.href =
"index.html";
}