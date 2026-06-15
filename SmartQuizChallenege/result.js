const score =
parseInt(localStorage.getItem("score"));

const totalQuestions = 10;

document.getElementById("scoreText").innerText =
"Score : " + score + " / " + totalQuestions;

document.getElementById("certificateScore").innerText =
"Final Score : " + score + " / " + totalQuestions;

let awardImage =
document.getElementById("awardImage");

let badgeTitle =
document.getElementById("badgeTitle");

let performance =
document.getElementById("performance");

if(score >= 9){

awardImage.src =
"images/trophy.png";

badgeTitle.innerText =
"🏆 GOLD CHAMPION";

performance.innerText =
"Outstanding Performance!";

createConfetti();
}

else if(score >= 7){

awardImage.src =
"images/gold-badge.png";

badgeTitle.innerText =
"🥇 GOLD BADGE";

performance.innerText =
"Excellent Performance";
}

else if(score >= 5){

awardImage.src =
"images/silver-badge.png";

badgeTitle.innerText =
"🥈 SILVER BADGE";

performance.innerText =
"Good Job";
}

else{

awardImage.src =
"images/bronze-badge.png";

badgeTitle.innerText =
"🥉 BRONZE BADGE";

performance.innerText =
"Keep Practicing";
}

let leaderboard =
JSON.parse(
localStorage.getItem("leaderboard")
) || [];

leaderboard.push(score);

localStorage.setItem(
"leaderboard",
JSON.stringify(leaderboard)
);

function restartQuiz(){

window.location.href =
"index.html";
}

function openLeaderboard(){

window.location.href =
"leaderboard.html";
}

function GenerateCertificate() {
    window.location.href="certificate.html";
}



function createConfetti(){

for(let i=0;i<150;i++){

let confetti =
document.createElement("div");

confetti.classList.add("confetti");

confetti.style.left =
Math.random()*100 + "vw";

confetti.style.animationDelay =
Math.random()*3 + "s";

confetti.style.background =
`hsl(${Math.random()*360},
100%,50%)`;

document.body.appendChild(
confetti
);
}
}