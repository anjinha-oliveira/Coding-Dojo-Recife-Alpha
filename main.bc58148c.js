

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

function changeIconColor(color){

  document.getElementById('mainIconPathAttribute').attributes[2].nodeValue = color;

}

let info1 = "Nomear variáveis de maneira intuitiva.";
let info2 = "Evite chamar funções para testes em loops."
let info3 ="Perguntar para aprender, perguntar para ensinar.";
let info4 = "Percorrer loops somente o necessário.";
let info1EN = "Name variables intuitively.";
let info2EN = "Avoid calling functions for testing in loops."
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

  if ((counter%2) != 0){

    currentLang = 'EN';
    currentLangIndex = 1;

    document.getElementsByClassName("wikiInfo")[0].textContent = infoList[currentInfoText][currentLangIndex];

  } else {
    
    currentLang = 'PT';
    currentLangIndex = 0;

    document.getElementsByClassName("wikiInfo")[0].textContent = infoList[currentInfoText][currentLangIndex];

  }

  console.log(currentLang);
  
}



function configVideoBox(){

    
  //console.log(document.getElementById('video').contentWindow.document.getElementsByTagName("video")[0]);

  document.getElementById('video').contentWindow.document.getElementsByTagName("video")[0].controls = false;
  document.getElementById('video').contentWindow.document.getElementsByTagName("video")[0].loop = true;
  document.getElementById('video').contentWindow.document.getElementsByTagName("video")[0].muted = true;
  document.getElementById('video').contentWindow.document.getElementsByTagName("video")[0].style.margin = 0;
  document.getElementById('video').contentWindow.document.getElementsByTagName("video")[0].play();
  
  document.getElementById('video').contentWindow.document.getElementsByTagName("video")[0].disablePictureInPicture = true;
  document.getElementById('video').contentWindow.document.getElementsByTagName("video").media.disablePictureInPicture = true;

}
 