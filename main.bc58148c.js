const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))



currentBackgroundIndex = 0;
const sidewalksList = [['pastilhas.jpg','lang-top-background.png','lang-calcada.jpg',2000],['rachado.png','lang-top-background-rachado.jpg','rachado2.jpg',2000]];
let interval = 3000;
function sidewalk(){

  if (currentBackgroundIndex < sidewalksList.length){

    interval = sidewalksList[currentBackgroundIndex][3];
    currentBackgroundIndex += 1;
    
  }
  else{
    
    currentBackgroundIndex = 0;
    interval = 3000;
  
  
  };
  
  if (currentBackgroundIndex < sidewalksList.length){

    document.getElementById('sidewalk').style.backgroundImage = "url(" + "'assets/images/sidewalks/" + sidewalksList[currentBackgroundIndex][0] + "')";
    document.getElementById('langBox').style.backgroundImage = "url(" + "'assets/images/sidewalks/" + sidewalksList[currentBackgroundIndex][1] + "')";
    document.getElementById('externalLinks').style.backgroundImage = "url(" + "'assets/images/sidewalks/" + sidewalksList[currentBackgroundIndex][2] + "')";
    document.getElementById('footer').style.backgroundImage = "url(" + "'assets/images/sidewalks/" + sidewalksList[currentBackgroundIndex][2] + "')";

    document.getElementById('sidewalk').style.backgroundSize = 'cover';
    document.getElementById('langBox').style.backgroundSize = 'contain';
    document.getElementById('externalLinks').style.backgroundSize = 'cover'; 
    
  }
  

  setTimeout(() => {

    sidewalk();

  }, 2300);

}

setTimeout(() => {

  sidewalk();


}, 2500);



// function changeIconColor(color){

//   document.getElementById('mainIconPathAttribute').attributes[2].nodeValue = color;

// }

function backgroundOn(){

  document.getElementById('register').style.backgroundColor = 'purple';

}

function backgroundOff(){

  document.getElementById('register').style.backgroundColor = '';

}

let info1 = "Reduza o número de comentários ao dar nomes mais intuitivos às funções e variáveis - código não mente.";
let info2 = "Código muito aninhado compromete tanto a facilidade de leitura quanto a eficiência do código em tempo e memória."
let info1EN = "Reduce the number of comments by giving functions and variables more intuitive names - code doesn't lie.";
let info2EN = "Code that is too nested compromises both readability and the efficiency of the code in time and memory."
let infoList = [[info1, info1EN], [info2, info2EN]];

let infoImg1 = './assets/images/wiki1.png';
let infoImg2 = './assets/images/wiki2.png';


let infoImgList = [infoImg1, infoImg2];

let len = infoList.length;

let currentInfoText = 0;

let currentLangIndex = 0;

function nextWikiInfo(){

  currentInfoText += 1;

  if (currentInfoText===(len)){currentInfoText = 0};

  document.getElementsByClassName("wikiInfo")[0].textContent = infoList[currentInfoText][currentLangIndex];
  document.getElementById('seedsArt').src = infoImgList[currentInfoText];

}

function previewsWikiInfo(){

  currentInfoText -= 1;

  if (currentInfoText===-1){currentInfoText = (len - 1) };

  document.getElementsByClassName("wikiInfo")[0].textContent = infoList[currentInfoText][currentLangIndex];
  document.getElementById('seedsArt').src = infoImgList[currentInfoText];
  

}










// setTimeout(() => {

//   document.getElementById('top-background').style.opacity = '100%';

// }, 100);

// setTimeout(() => {

//   document.getElementById('header-presentation').style.opacity = 1;

// }, 2500);

// setTimeout(() => {

//   document.getElementById('langBox').style.opacity = 0.6;

// }, 3800);


// setTimeout(() => {

//   document.getElementById('sobremim').style.opacity = 1;

// }, 4500);












let currentLang = 'PT';
let counter = 0;
function langSelection() {

  counter += 1;

  if ((counter%2) != 0){

    currentLang = 'EN';
    currentLangIndex = 1;

    document.getElementsByClassName("wikiInfo")[0].textContent = infoList[currentInfoText][currentLangIndex];

    document.getElementById("lema1").textContent = 'TEST DRIVEN';
    document.getElementById("lema2").textContent = 'READABLE';
    document.getElementById("lema3").textContent = 'SCALABLE';
    document.getElementById("lema4").textContent = 'RESPONSIVE';
    
    document.getElementById("next-event").textContent = '\n                \n            Next Event: \n            \n            📅 06/12/2022 19h.\n            \n            🗺️ Labcodes Software Studio, Praça do Derby, 149, Sala 1109.\n            \n            Register:\n            \n              \n                Bitly\n                bit.ly/dojorecife5\n              \n\n          ';

  } else {
    
    currentLang = 'PT';
    currentLangIndex = 0;

    document.getElementsByClassName("wikiInfo")[0].textContent = infoList[currentInfoText][currentLangIndex];

    document.getElementById("lema1").textContent = 'ORIENTADO A TESTE';
    document.getElementById("lema1").style.fontSize = '1.2vw';

    document.getElementById("lema2").textContent = 'LEGÍVEL';
    document.getElementById("lema3").textContent = 'ESCALONÁVEL';
    document.getElementById("lema4").textContent = 'RESPONSIVO';

    document.getElementById("next-event").textContent = '\n                \n            Próximo Evento: \n            \n            📅 06/12/2022 19h.\n            \n            🗺️ Labcodes Software Studio, Praça do Derby, 149, Sala 1109.\n            \n            Se inscreva:\n            \n              \n                Bitly\n                bit.ly/dojorecife5\n              \n\n          ';

  }

  console.log(currentLang);
  
}



function configVideoBox(){

    
  //console.log(document.getElementById('video').contentWindow.document.getElementsByTagName("video")[0]);

  document.getElementById('video').contentWindow.document.getElementsByTagName("video")[0].controls = false;
  document.getElementById('video').contentWindow.document.getElementsByTagName("video")[0].loop = true;
  document.getElementById('video').contentWindow.document.getElementsByTagName("video")[0].muted = true;
  console.log(document.getElementById('video').contentWindow.document.getElementsByTagName("video")[0].style.margin);
  document.getElementById('video').contentWindow.document.getElementsByTagName("video")[0].style.margin = 0;
  console.log(document.getElementById('video').contentWindow.document.getElementsByTagName("video")[0].style.margin);
  document.getElementById('video').contentWindow.document.getElementsByTagName("video")[0].play();

  document.getElementById('doCaosALama').play();
  console.log('play');
  document.getElementById('video').contentWindow.document.getElementsByTagName("video")[0].disablePictureInPicture = true;
  document.getElementById('video').contentWindow.document.getElementsByTagName("video").media.disablePictureInPicture = true;

}
