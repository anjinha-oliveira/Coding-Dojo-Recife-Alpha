

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


let info1 = "Nomear variáveis de maneira intuitiva.";
let info2 = "Evite chamar funções para testes em loops."
let info3 ="Nomear funções da maneira intuitivaPerguntar para aprender, perguntar para ensinar.";
let info4 = "Percorrer loops somente o necessário.";
let info1EN = "Nomear variáveis de maneira intuitiva.";
let info2EN = "Evite chamar funções para testes em loops."
let info3EN ="Naming functions the intuitive way.";
let info4EN = "Step through loops only as needed.";
let infoList = [[info1, info1EN], [info2, info2EN], [info3, info3EN], [info4, info4EN]];

let infoImg1 = './assets/images/placeholder.png';
let infoImg2 = './assets/images/placeholder.png';
let infoImg3 = './assets/images/placeholder.png';
let infoImg4 = './assets/images/placeholder.png';

let infoImgList = [infoImg1, infoImg2, infoImg3, infoImg4];

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

  // if ((counter%2) != 0){

  //   currentLang = 'EN';
  //   currentLangIndex = 1;

  //   document.getElementsByClassName("wikiInfo")[0].textContent = infoList[currentInfoText][currentLangIndex];

  //   document.getElementById('profession').innerHTML = '';
  //   document.getElementById('sobreMim').innerHTML = '';
  //   document.getElementById('anObserver').innerHTML = '';
  //   document.getElementById('poem1').innerHTML = '\n                          \n                          \n                          The mind hesitates <br>\n                          Pervades space<br>\n                          In the apparent movement<br>  \n                         of the stars in the sky<br>\n                          of the ants on the ground<br>\n                         of the insistent water<br>\n                         pouring out<br>\n                        of all things<br> \n                          of the non-empty spaces<br>\n                          of unsurrendered truths<br>\n                          of the light not yet spoken\n                          \n                          \n                        ';
  //   document.getElementById('poem2').innerHTML = '';
  //   document.getElementById('projetosTitle').innerHTML = "EVENTS";  
  //   document.getElementById('date1').innerHTML = "";
  //   document.getElementById('use1').innerHTML = "";
  //   document.getElementById('note1').innerHTML = "";
  //   document.getElementById('date2').innerHTML = "";
  //   document.getElementById('use2').innerHTML = "";
  //   document.getElementById('date3').innerHTML = "";
  //   document.getElementById('use3').innerHTML = "";
  //   document.getElementById('date4').innerHTML = "";
  //   document.getElementById('use4').innerHTML = "";
  //   document.getElementById('note4').innerHTML = "";
  //   document.getElementById('date5').innerHTML = "";
  //   document.getElementById('use5').innerHTML = ""; 
    
  //   document.getElementById('educacaoTitle').innerHTML = "";
  //   document.getElementById('inst1').innerHTML = "";
  //   document.getElementById('course1').innerHTML = "";
  //   document.getElementById('course2').innerHTML = "";
  //   document.getElementById('course3').innerHTML = "";
  //   document.getElementById('course4').innerHTML = "";

  //   document.getElementById('openSource').innerHTML = "";
  //   document.getElementById('openSource2').innerHTML = "";
  //   document.getElementById('physics').innerHTML = "";
  //   document.getElementById('physics2').innerHTML = "";
  //   document.getElementById('mechanics').innerHTML = "";
  //   document.getElementById('mathematics').innerHTML = "";
  //   document.getElementById('simulation').innerHTML = "";
  //   document.getElementById('informationTheory').innerHTML = "";
  //   document.getElementById('computing').innerHTML = "";
  //   document.getElementById('communication2').innerHTML = "";
  //   document.getElementById('epistemology2').innerHTML = "";
  //   document.getElementById('economy2').innerHTML = "";
  //   document.getElementById('inteligence').innerHTML = "";

  // } else {
    
  //   currentLang = 'PT';
  //   currentLangIndex = 0;

  //   document.getElementsByClassName("wikiInfo")[0].textContent = infoList[currentInfoText][currentLangIndex];

  //   document.getElementById('profession').innerHTML = '';
  //   document.getElementById('sobreMim').innerHTML = '';
  //   document.getElementById('anObserver').innerHTML = '';
  //   document.getElementById('poem1').innerHTML = '';
  //   document.getElementById('poem2').innerHTML = '';
  //   document.getElementById('projetosTitle').innerHTML = "EVENTOS";
  //   document.getElementById('date1').innerHTML = "";
  //   document.getElementById('use1').innerHTML = "";
  //   document.getElementById('note1').innerHTML = "";
  //   document.getElementById('date2').innerHTML = "";
  //   document.getElementById('use2').innerHTML = "";
  //   document.getElementById('date3').innerHTML = "";
  //   document.getElementById('use3').innerHTML = "";
  //   document.getElementById('date4').innerHTML = "";
  //   document.getElementById('use4').innerHTML = "";
  //   document.getElementById('note4').innerHTML = "";
  //   document.getElementById('date5').innerHTML = ".";
  //   document.getElementById('use5').innerHTML = "";

  // }

  //console.log(currentLang);
  
}