const questions = {
  "General Knowledge":[
    {
      q: "What is the capital of India?",
      a: "Mumbai",
      b: "Delhi",
      c: "Kolkata",
      d: "Chennai",
      correct: "Delhi"
    },
    {
      q: "How many continents are there in the world?",
      a: "5",
      b: "6",
      c: "7",
      d: "8",
      correct: "7"
    },
    {
      q: "Which is the largest ocean on Earth?",
      a: "Atlantic Ocean",
      b: "Indian Ocean",
      c: "Arctic Ocean",
      d: "Pacific Ocean",
      correct: "Pacific Ocean"
    },
    {
      q: "Who is known as Father of India?",
      a: "Bhagat Singh",
      b: "Mahatma Gandhi",
      c: "Nehru",
      d: "Subhash Bose",
      correct: "Mahatma Gandhi"
    },
    {
      q: "Which is the national animal of India?",
      a: "Elephant",
      b: "Lion",
      c: "Tiger",
      d: "Leopard",
      correct: "Tiger"
    },
    {
      q: "Which planet is known as Red Planet?",
      a: "Earth",
      b: "Mars",
      c: "Jupiter",
      d: "Venus",
      correct: "Mars"
    },
    {
      q: "How many states are there in India?",
      a: "28",
      b: "29",
      c: "30",
      d: "31",
      correct: "28"
    },
    {
      q: "Which is the longest river in India?",
      a: "Ganga",
      b: "Yamuna",
      c: "Godavari",
      d: "Krishna",
      correct: "Ganga"
    },
    {
      q: "Which is the smallest continent?",
      a: "Europe",
      b: "Australia",
      c: "Asia",
      d: "Africa",
      correct: "Australia"
    },
    {
      q: "Which is the national flower of India?",
      a: "Rose",
      b: "Lotus",
      c: "Lily",
      d: "Sunflower",
      correct: "Lotus"
    }
  ],

  "Current Affairs": [
    {
      q: "What is the name of India’s digital payment system?",
      a: "UPI",
      b: "NEFT",
      c: "IMPS",
      d: "SWIFT",
      correct: "UPI"
    },
    {
      q: "Which organization hosts G20 summit?",
      a: "UNO",
      b: "World Bank",
      c: "G20 Countries",
      d: "IMF",
      correct: "G20 Countries"
    },
    {
      q: "What does ISRO stand for?",
      a: "Indian Space Research Organisation",
      b: "International Space Research Office",
      c: "Indian Satellite Research Office",
      d: "India Space Rocket Organization",
      correct: "Indian Space Research Organisation"
    },
    {
      q: "Which sport is associated with IPL?",
      a: "Football",
      b: "Cricket",
      c: "Hockey",
      d: "Tennis",
      correct: "Cricket"
    },
    {
      q: "Which country hosted COP climate summit recently?",
      a: "India",
      b: "UK",
      c: "France",
      d: "Brazil",
      correct: "India"
    },
    {
      q: "Which is India’s capital?",
      a: "Mumbai",
      b: "New Delhi",
      c: "Chennai",
      d: "Kolkata",
      correct: "New Delhi"
    },
    {
      q: "Which app is used for Aadhaar services?",
      a: "DigiLocker",
      b: "UMANG",
      c: "Paytm",
      d: "Google Pay",
      correct: "UMANG"
    },
    {
      q: "Who controls cricket in India?",
      a: "ICC",
      b: "BCCI",
      c: "AIFF",
      d: "IOA",
      correct: "BCCI"
    },
    {
      q: "India’s largest trading partner is?",
      a: "USA",
      b: "China",
      c: "Russia",
      d: "UK",
      correct: "USA"
    },
    {
      q: "Festival of Lights in India is?",
      a: "Holi",
      b: "Diwali",
      c: "Eid",
      d: "Christmas",
      correct: "Diwali"
    }
  ],

  "Science": [
    {
      q: "What is H2O?",
      a: "Salt",
      b: "Water",
      c: "Oxygen",
      d: "Hydrogen",
      correct: "Water"
    },
    {
      q: "What planet do we live on?",
      a: "Mars",
      b: "Venus",
      c: "Earth",
      d: "Jupiter",
      correct: "Earth"
    },
    {
      q: "What gas do humans breathe in?",
      a: "Carbon Dioxide",
      b: "Oxygen",
      c: "Hydrogen",
      d: "Nitrogen",
      correct: "Oxygen"
    },
    {
      q: "Center of atom is called?",
      a: "Electron",
      b: "Nucleus",
      c: "Proton",
      d: "Neutron",
      correct: "Nucleus"
    },
    {
      q: "Which organ pumps blood?",
      a: "Lungs",
      b: "Brain",
      c: "Heart",
      d: "Kidney",
      correct: "Heart"
    },
    {
      q: "Force that pulls us down?",
      a: "Magnetism",
      b: "Gravity",
      c: "Friction",
      d: "Electricity",
      correct: "Gravity"
    },
    {
      q: "Gas used in balloons?",
      a: "Oxygen",
      b: "Hydrogen",
      c: "Helium",
      d: "Carbon dioxide",
      correct: "Helium"
    },
    {
      q: "Speed of light?",
      a: "300,000 km/s",
      b: "150,000 km/s",
      c: "1,000 km/s",
      d: "3,000 km/s",
      correct: "300,000 km/s"
    },
    {
      q: "Plant part that makes food?",
      a: "Root",
      b: "Stem",
      c: "Leaf",
      d: "Flower",
      correct: "Leaf"
    },
    {
      q: "Boiling point of water?",
      a: "50°C",
      b: "100°C",
      c: "150°C",
      d: "200°C",
      correct: "100°C"
    }
  ]
};

let category = localStorage.getItem("category");
let currentQuestions = questions[category];

console.log("Category:",category);
console.log("Questions:",currentQuestions);

let index = 0;
let score = 0;
let timer = 3;
let interval;
let answered = false;

// show category title
document.getElementById("categoryTitle").innerText = category;

// ================= SHOW QUESTION =================
function showQuestion() {
    answered = false;
    let buttons=document.querySelectorAll(".option-btn");
    buttons.forEach(btn => {
        btn.classList.remove("correct");
        btn.classList.remove("wrong");
        btn.disabled=false;
    })
   document.getElementById("nextBtn").style.display="none";

   document.getElementById("questionNumber").innerText=`Question ${index +1 } / ${currentQuestions.length}`;
    let q = currentQuestions[index];


    document.getElementById("question").innerText = q.q;

    document.getElementById("a").innerText = q.a;
    document.getElementById("b").innerText = q.b;
    document.getElementById("c").innerText = q.c;
    document.getElementById("d").innerText = q.d;

    startTimer();
}

// ================= SELECT ANSWER =================
function selectAnswer(selectedOption) {
    if (answered) return;
    answered = true;

    let q = currentQuestions[index];

    let correctAnswer = q.correct;

    let options = {
        0: q.a,
        1: q.b,
        2: q.c,
        3: q.d
    };

    let buttons = document.querySelectorAll(".option-btn");

    buttons.forEach((btn, i) => {
        btn.disabled = true;

        if (options[i] === correctAnswer) {
            btn.classList.add("correct");
        } 
        else if (i === selectedOption) {
            btn.classList.add("wrong");
        }
    });

    if (options[selectedOption] === correctAnswer) {
        score++;
    }
    document.getElementById("nextBtn").style.display="block";
}

// ================= TIMER =================
function startTimer() {
    clearInterval(interval);

    timer = 3;
    document.getElementById("timer").innerText = timer;

    interval = setInterval(() => {
        timer--;
        document.getElementById("timer").innerText = timer;

        if (timer <= 0) {
            clearInterval(interval);
            nextQuestion();
        }
    }, 1000);
}

// ================= NEXT QUESTION =================
function nextQuestion() {
    index++;

    if (index < currentQuestions.length) {
        showQuestion();
    } else {
        
localStorage.setItem(
"score",
score
);

localStorage.setItem(
"total",
currentQuestions.length
);

window.location.href=
"result.html";
    }
}

// ================= START QUIZ =================
showQuestion();