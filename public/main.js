import "../src/style.css";

let newStory = [
  // 0
  {
    header: "",
    description: "",
    sporgsmaal: "",
    choices: [{ text: "Start spillet ", nextState: 1 }],
    imgUrl: "./Intro.jpg",
  },

  //1
  {
    header: "",
    description: `Selvom man ikke skulle tro det, så kan landbruget påvirke havet og deres valg kan have store konsekvenser for havets tilstand.`,
    sporgsmaal: `Hvilken type gødning skal landmændene bruge?`,
    choices: [
      { text: "Organisk gødning  ", nextState: 3 },
      { text: "NPK-gødning ", nextState: 4 },
    ],
    imgUrl: "./Intro2.jpg",
  },

  //2
  {
    header: "Rugbrødsmotoren",
    description: `Du er nu dagens rugbrødsmotor. Du finder hurtigt ud af hvor hårdt det er og vil gerne skifte med din bedste ven. Du tænker ikke det bliver noget problem og I skifter i kanoen ude på vandet (1). I gider ikke tage nogen chancer og I roer ind til bredden hvor I skifter (2).`,
    choices: [
      { text: "Skift ude på vandet   ", nextState: 5 },
      { text: "Skift ved bredden  ", nextState: 6 },
    ],
    imgUrl: "./images/pic3.png",
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
