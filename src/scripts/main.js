import "../src/style.css";

console.log("JavaScript virker!");

let newStory = [
  // 0 Intro
  {
    header: "Havets Hemmelighed",
    description: "",
    sporgsmaal: "",
    choices: [{ text: "Start spillet ", nextState: 1 }],
    imgUrl: "./Intro5.jpg",
  },

  //1 Intro bondegården
  {
    header: "",
    description: `Selvom man ikke skulle tro det, så kan landbruget påvirke havet og deres valg kan have store konsekvenser for havets tilstand.`,
    sporgsmaal: `Hvilken type gødning skal landmændene bruge?`,
    choices: [
      { text: "Organisk gødning  ", nextState: 2 },
      { text: "NPK-gødning ", nextState: 16 },
    ],
    imgUrl: "./scene1.JPG",
  },

  //2 Organisk gødning Resultat
  {
    header: "",
    description: `Godt valgt! <br>
Organisk gødning virker langsomt, så planterne når at optage næringen. <br> Det betyder, at der ikke skylles så meget kvælstof ud i havet – og derfor vokser algerne ikke vildt. Det er godt nyt for livet under overfladen!`,
    sporgsmaal: ``,
    choices: [{ text: "Næste ", nextState: 3 }],
    imgUrl: "./scene2.jpg",
  },

  //3 Organisk gødning Spørgsmål
  {
    header: "",
    description: `Efteråret er på vej! Og der er stadig næringsstoffer i jorden, som kan blive skyllet ud i vandløb og ende i havet. Det kan give problemer for havmiljøet.`,
    sporgsmaal: `Hvad gør du for at beskytte havet? Vælg din strategi!`,
    choices: [
      { text: "Plant efterafgrøder", nextState: 4 },
      { text: "Lad markerne stå nøgne", nextState: 8 },
    ],
    imgUrl: "./scene3.jpg",
  },

  //4 Plant efterafgrøder Resultat
  {
    header: "",
    description: `Godt valg! Efterafgrøder fungere som en grøn støvsuger. <br>
Efterafgrødernes lange rødder suger overskydende gødning op, før regnen skyller det ud i vandet. Det beskytter havet og giver mere ilt til fisk og planter.`,
    sporgsmaal: ``,
    choices: [{ text: "Næste", nextState: 5 }],
    imgUrl: "./scene4.jpg",
  },

  //5 Plant efterafgrøder spørgsmål
  {
    header: "",
    description: `Vejrudsigten skifter hele tiden, og det kan ændre havets tilstand`,
    sporgsmaal: `Hvad tror du, er den bedste vejrudsigt for havets tilstand?`,
    choices: [
      { text: "Der kommer kraftig blæst", nextState: 6 },
      { text: "Ingen vind og 25 grader i ugevis", nextState: 14 },
    ],
    imgUrl: "./scene5c.jpg",
  },

  //6 Der kommer kraftig blæst = Resultat
  {
    header: "",
    description: `Godt vejrvalg! Vinden blander vandet, så der kommer ilt helt ned på bunden.
Ålegræs og dyr kan trives igen – naturen hjælper sig selv, når der ikke er for meget gødning i vejen.`,
    sporgsmaal: ``,
    choices: [{ text: "Få dit vinder badge", nextState: 7 }],
    imgUrl: "./scene6.jpg",
  },

  //7 Der kommer kraftig blæst = Vinder badge
  {
    header: "",
    description: ``,
    sporgsmaal: `Sådan du klarede det. Havmiljøet er i balance. <br> Du får badge: Havets Konge`,
    choices: [{ text: "Prøv igen", nextState: 0 }],
    imgUrl: "./scene7B.jpg",
  },

  //8 Nøgne marker resultat
  {
    header: "",
    description: `Uden planter på marken løber gødningen direkte ud i vandet.
Algerne vokser vildt, og dyreplankton kan ikke følge med.`,
    sporgsmaal: ``,
    choices: [{ text: "Næste", nextState: 9 }],
    imgUrl: "./scene8.jpg",
  },

  //9 Nøgne marker spørgsmål
  {
    header: "",
    description: `Når algerne dør og synker de til bunds. Her begynder bakterierne at gå i gang.`,
    sporgsmaal: `Men hvad sker der egentlig, når bakterierne tager over?`,
    choices: [
      { text: "De spiser de døde alger", nextState: 10 },
      { text: "Der sker ingenting", nextState: 12 },
    ],
    imgUrl: "./scene9.jpg",
  },

  //10 De spiser de døde alger  resultat
  {
    header: "",
    description: `
Bakterierne spiser de mange døde alger, men de bruger også en masse ilt. Til sidst er der næsten ingen ilt tilbage på havbunden. Krabber og muslinger flygter. Havet begynder at vise tegn på iltsvind.`,
    sporgsmaal: ``,
    choices: [{ text: "Få dit badge", nextState: 11 }],
    imgUrl: "./Scene10.jpg",
  },

  //11 De spiser de døde alger resultat = Vinder badge
  {
    header: "",
    description: ``,
    sporgsmaal: `Du lærte, hvor vigtigt efterafgrøder på markerne er for livet i havet. Iltsvind i sigte, men du forstod hvorfor. <br> Du får badge: Iltdetektiv`,
    choices: [{ text: "Prøv igen", nextState: 0 }],
    imgUrl: "./Scene11B.jpg",
  },

  //12 Der sker ingenting  resultat
  {
    header: "",
    description: `Selvom det måske ikke kan ses, sker der faktisk meget på havbunden. <br>
     Hvis der ikke er nok bakterier til at fjerne de døde algerne, så hober det op. Ålegræs bliver kvalt, og giftige stoffer kan opstå, hvilket gør livet svært for mange dyr og planter.`,
    sporgsmaal: ``,
    choices: [{ text: "Få dit badge", nextState: 13 }],
    imgUrl: "./scene12.jpg",
  },

  //13 Der sker ingenting = Vinder badge
  {
    header: "",
    description: ``,
    sporgsmaal: `Du lærer, hvor vigtigt havets små rengøringshold er. <br> Du får badge: Kystvagt i Lære`,
    choices: [{ text: "Prøv igen", nextState: 0 }],
    imgUrl: "./scene13B.jpg",
  },

  //14 Ingen vind og 25 grader i ugevis  resultat
  {
    header: "",
    description: `Havet ligger stille. Det varme vejr får algerne til at vokse, og uden vind bliver vandet ikke blandet. Det betyder, at der mangler ilt nede ved bunden. Heldigvis har du ikke overgødet – så ålegræsset klarer det meste… men det er på grænsen.`,
    sporgsmaal: ``,
    choices: [{ text: "Få dit badge", nextState: 15 }],
    imgUrl: "./scene14.jpg",
  },

  //15 Ingen vind og 25 grader i ugevis = Vinder badge
  {
    header: "",
    description: ``,
    sporgsmaal: `Du lærer at selv vejret påvirker havet, men selv med stille vand holdte du havet i balance. <br> Du får badge: Havhelt`,
    choices: [{ text: "Prøv igen", nextState: 0 }],
    imgUrl: "./scene15B.jpg",
  },

  //16 NPK gødning Resultat
  {
    header: "",
    description: `Planterne vokser hurtigt – men det gør algerne også! <br>
NPK-gødning virker med det samme, men der er for meget næring. En stor del ryger ud i vandløbene og videre til havet.`,
    sporgsmaal: ``,
    choices: [{ text: "Næste ", nextState: 17 }],
    imgUrl: "./scene16c.jpg",
  },

  //17 NPK gødning spørgsmål
  {
    header: "",
    description: `Med al den næring i havet begynder algerne at vokse som vilde. Vandet bliver grønt og uklart – og havets balance bliver forstyrret`,
    sporgsmaal: `Men hvad sker der egentlig med algerne i havet?`,
    choices: [
      { text: "Dyreplankton spiser dem", nextState: 18 },
      { text: "De dør og synker til bunds", nextState: 24 },
    ],
    imgUrl: "./scene17.jpg",
  },

  //18 Dyreplankton spiser dem Resultat
  {
    header: "",
    description: `Dyreplankton spiser alger – men de kan ikke spise uendeligt. Når der kommer for mange alger, ender det med, at en stor del af dem dør og falder til bunds – og det er der problemet starter`,
    sporgsmaal: ``,
    choices: [{ text: "Næste ", nextState: 19 }],
    imgUrl: "./scene18.jpg",
  },

  //19 Dyreplankton spiser dem spørgsmål
  {
    header: "",
    description: `Ud over landbruget kommer der også næring fra spildevand. Når det regner meget, kan renseanlæg blive overfyldte, og urenset vand ryger i havet.`,
    sporgsmaal: `Skal vi bygge større renseanlæg, så mere vand bliver renset?`,
    choices: [
      { text: "Ja! Det ville hjælpe", nextState: 20 },
      { text: "Nej, det er for dyrt", nextState: 22 },
    ],
    imgUrl: "./scene19.jpg",
  },

  //20 Ja! Det ville hjælpe  resultat
  {
    header: "",
    description: `Større renseanlæg hjælper med at fjerne noget af den skadelige kvælstof, så mindre ender i havet. Det gør en forskel, men det løser ikke alt, især hvis landbruget stadig udleder meget.`,
    sporgsmaal: ``,
    choices: [{ text: "Få dit badge", nextState: 21 }],
    imgUrl: "./scene20.jpg",
  },

  //21 Ja! Det ville hjælpe = Vinder badge
  {
    header: "",
    description: ``,
    sporgsmaal: `Du gjorde en indsats ved at forbedre vores renseanlæg, men det er svært at forbedre havet, når landbruget udleder for meget næring. <br> Du får badge: Den Lille Rensehelt`,
    choices: [{ text: "Prøv igen", nextState: 0 }],
    imgUrl: "./scene21B.jpg",
  },

  //22 Nej, det er for dyrt resultat
  {
    header: "",
    description: `Algerne vokser vildt, og iltsvind spreder sig. Bunddyrene dør, og fiskene flygter. Når vi ikke gør noget, bruger algerne al ilten i havet, og livet forsvinder. Det bliver en grå og tom zone under vandet.`,
    sporgsmaal: ``,
    choices: [{ text: "Få dit badge", nextState: 23 }],
    imgUrl: "./scene22.jpg",
  },

  //23 Nej, det er for dyrt =  badge
  {
    header: "",
    description: ``,
    sporgsmaal: `Du lærer, at dyreplankton ikke kan klare det hele, hvis der stadig kommer for meget næring fra landbruget.
 <br> Du får badge: Havets Skurk`,
    choices: [{ text: "Prøv igen", nextState: 0 }],
    imgUrl: "./scene23B.jpg",
  },

  //24 De dør og synker til bunds Resultat
  {
    header: "",
    description: `Når døde alger falder til bunds, skal de nedbrydes af bakterier. Men det kræver ilt – og hvis der er alt for mange alger, bliver der brugt alt for meget ilt. Til sidst er der ikke noget tilbage og der opstår iltsvind`,
    sporgsmaal: ``,
    choices: [{ text: "Næste ", nextState: 25 }],
    imgUrl: "./Scene24.jpg",
  },

  //25 De dør og synker til bunds spørgsmål
  {
    header: "",
    description: `Landbruget udleder 60% af alle næringsstoffer, der kommer i havet. `,
    sporgsmaal: `Ville det hjælpe at fjerne noget af landbrugsarealet?`,
    choices: [
      { text: "Ja, mere plads til natur", nextState: 26 },
      { text: "Nej, vi skal bruge al jorden", nextState: 28 },
    ],
    imgUrl: "./scene16c.jpg",
  },

  //26 Ja, mere plads til natur resultat
  {
    header: "",
    description: `Hvis vi bruger mindre af landet til marker og mere til skov og natur, så udleder vi mindre kvælstof til havet. Det giver havmiljøet en pause – og så kan det begynde at hele sig selv igen.`,
    sporgsmaal: ``,
    choices: [{ text: "Få dit badge", nextState: 27 }],
    imgUrl: "./scene26.jpg",
  },

  //27 Ja, mere plads til natur = Vinder badge
  {
    header: "",
    description: ``,
    sporgsmaal: `Du gjorde en indsats ved at reducere landbrugsarealet, men det er svært at forbedre havet, når landbruget udleder for meget næring.
 <br> Du får badge: Halv Miljøhelt`,
    choices: [{ text: "Prøv igen", nextState: 0 }],
    imgUrl: "./scene27B.jpg",
  },

  //28 Nej, vi skal bruge al jorden resultat
  {
    header: "",
    description: `Hvis vi dyrker på al jorden og bruger samme mængde gødning, skader vi havet. Havbunden begynder at lugte, og et “liglagen” kommer – Hvor hvide bakterier prøver at stoppe giftige stoffer. Det betyder, at livet i havet er i fare.`,
    sporgsmaal: ``,
    choices: [{ text: "Få dit badge", nextState: 29 }],
    imgUrl: "./scene28.jpg",
  },

  //29 Nej, vi skal bruge al jorden = Vinder badge
  {
    header: "",
    description: ``,
    sporgsmaal: `Du lærer, hvad der sker, når vi ikke passer på jorden og havet.
 <br> Du får badge: Danger Zone `,
    choices: [{ text: "Prøv igen", nextState: 0 }],
    imgUrl: "./scene29B.jpg",
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
