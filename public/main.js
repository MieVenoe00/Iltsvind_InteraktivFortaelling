import "../src/style.css";

let newStory = [
  // 0 Intro
  {
    header: "",
    description: "",
    sporgsmaal: "",
    choices: [{ text: "Start spillet ", nextState: 1 }],
    imgUrl: "./Intro.jpg",
  },

  //1 Intro bondegården
  {
    header: "",
    description: `Selvom man ikke skulle tro det, så kan landbruget påvirke havet og deres valg kan have store konsekvenser for havets tilstand.`,
    sporgsmaal: `Hvilken type gødning skal landmændene bruge?`,
    choices: [
      { text: "Organisk gødning  ", nextState: 2 },
      { text: "NPK-gødning ", nextState: 88 },
    ],
    imgUrl: "./Intro2.jpg",
  },

  //2 Organisk gødning Resultat
  {
    header: "",
    description: `Godt valgt! <br>
Organisk gødning virker langsomt, så planterne når at optage næringen. <br> Det betyder, at der ikke skylles så meget kvælstof ud i havet – og derfor vokser algerne ikke vildt. Det er godt nyt for livet under overfladen!`,
    sporgsmaal: ``,
    choices: [{ text: "Næste ", nextState: 3 }],
    imgUrl: "./graes.jpg",
  },

  //3 Organisk gødning Spørgsmål
  {
    header: "",
    description: `Efteråret er på vej! Og der er stadig næringsstoffer i jorden, som kan blive skyllet ud i vandløb og ende i havet. Det kan give problemer for havmiljøet.`,
    sporgsmaal: `Hvad gør du for at beskytte havet? Vælg din strategi!`,
    choices: [
      { text: "Plant efterafgrøder", nextState: 4 },
      { text: "Lad markerne stå nøgne", nextState: 88 },
    ],
    imgUrl: "./graes.jpg",
  },

  //4 Plant efterafgrøder Resultat
  {
    header: "",
    description: `Godt valg! Efterafgrøder fungere som en grøn støvsuger. <br>
Efterafgrødernes lange rødder suger overskydende gødning op, før regnen skyller det ud i vandet. Det beskytter havet og giver mere ilt til fisk og planter.`,
    sporgsmaal: ``,
    choices: [{ text: "Næste", nextState: 5 }],
    imgUrl: "./graes.jpg",
  },

  //5 Plant efterafgrøder spørgsmål
  {
    header: "",
    description: `Vejrudsigten skifter hele tiden, og det kan ændre havets tilstand`,
    sporgsmaal: `Hvad tror du, er den bedste vejrudsigt for havets tilstand?`,
    choices: [
      { text: "Der kommer kraftig blæst", nextState: 88 },
      { text: "Ingen vind og 25 grader i ugevis", nextState: 88 },
    ],
    imgUrl: "./havet.jpg",
  },
];

// Hooks til HTML DOM
const headerEl = document.querySelector("header h1");
const textEl = document.querySelector("#text p");
const questionEl = document.querySelector("#sporgsmaal");
const optionsEl = document.querySelector("#options");
const imgEl = document.querySelector("#storyImg");

// Sæt den aktuelle position i historien.
let currentState = 0;

function startGame() {
  showText(currentState);
  showImage(currentState);
  showChoices(currentState);
}

function showText(stateID) {
  //console.log(newStory[stateID].description)
  headerEl.textContent = newStory[stateID].header;
  textEl.innerHTML = newStory[stateID].description;
  questionEl.innerHTML = newStory[stateID].sporgsmaal;
}

function showImage(stateID) {
  // Show image on page
  imgEl.src = newStory[stateID].imgUrl;
}

function showChoices(stateID) {
  optionsEl.innerHTML = "";

  console.log(newStory[stateID]);

  newStory[stateID].choices.forEach((valg) => {
    const element = document.createElement("div");
    element.classList.add("btnvalg");
    const img = document.createElement("img");
    img.src = "./knap1.svg";
    element.appendChild(img);
    element.classList.add("btnvalg2");
    const img2 = document.createElement("img2");
    img.src = "./knap2.svg";
    element.appendChild(img);
    const h2 = document.createElement("h2");
    h2.textContent = valg.text;
    h2.id = "h2tekst";
    element.appendChild(h2);

    element.addEventListener("click", () => {
      optionSelected(valg);
    });
    console.log(element);
    optionsEl.append(element);
    /*
        <div class="btnvalg">
          <img src="images/skilt-02.svg" id="imgskilt1" alt="skilt">
          <!-- <h2 id="tekstbtn1">Valgmulighed 1</h2> -->
          <h2 id="h2tekst">Valgmulighed 1</h2>
        </div>
    */
  });
}

// knap 2

// Håndter den valgte knap
function optionSelected(options) {
  currentState = options.nextState;

  showText(currentState);
  showImage(currentState);
  showChoices(currentState);
}

// Start spillet
startGame();
