function startQuiz() {

    let playerName =
        document.getElementById("playerName").value;

    if (playerName.trim() === "") {
        alert("Please Enter Your Name");
        return;
    }

    localStorage.setItem("playerName", playerName);

    window.location.href = "category.html";
}

function showLeaderboard() {
    window.location.href = "leaderboard.html";
}