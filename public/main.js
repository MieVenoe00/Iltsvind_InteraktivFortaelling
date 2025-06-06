import "../src/style.css";

let newStory = [
  // 0
  {
    header: "Kanoturen",
    description: "",
    choices: [{ text: "Start spillet ", nextState: 1 }],
    imgUrl: "./Intro.jpg",
  },

  //1
  {
    header: "Styremesteren",
    description: `Du er nu dagens styrmand, og det går jo forrygende i starten, men efter lidt tid opdager du den første forhindring, forud skal du tage beslutning om I et; skal sejle gennem en klase åkander, hvor I risikere at sidde fast, eller to; sejle inde ved vandkanten, hvor I risikere at støde på grund.`,
    choices: [
      { text: "Åkanderne  ", nextState: 3 },
      { text: "Ved vandkanten ", nextState: 4 },
    ],
    imgUrl: "./images/pic3.png",
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
