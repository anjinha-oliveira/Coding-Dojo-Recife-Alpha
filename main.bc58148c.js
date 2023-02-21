const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


setTimeout(() => {

  document.getElementsByTagName('body')[0].style.transition ='all 4s';
  document.getElementsByTagName('body')[0].style.opacity = 1;

  setTimeout(() => {

    document.getElementsByTagName('body')[0].style.transition ='all 0s';
    
  }, 5000);
  
}, 100);






currentBackgroundIndex = 0;
const sidewalksList = [['pastilhas.jpg','lang-top-background.png','lang-calcada.jpg', 'rgba(69, 52, 97, 1)'],['rachado.png','lang-top-background-rachado.jpg','rachado2.jpg','rgba(255,255,255,0.7)']];

function sidewalk(){

  if (currentBackgroundIndex < sidewalksList.length){

    currentBackgroundIndex += 1;
    
  }
  else{
    
    currentBackgroundIndex = 0;
  
  
  };
  
  if (currentBackgroundIndex < sidewalksList.length){

    document.getElementById('sidewalk').style.backgroundImage = "url(" + "'assets/images/sidewalks/" + sidewalksList[currentBackgroundIndex][0] + "')";
    document.getElementById('sidewalk').style.color = sidewalksList[currentBackgroundIndex][3];

    document.getElementById('langBox').style.backgroundImage = "url(" + "'assets/images/sidewalks/" + sidewalksList[currentBackgroundIndex][1] + "')";
    document.getElementById('externalLinks').style.backgroundImage = "url(" + "'assets/images/sidewalks/" + sidewalksList[currentBackgroundIndex][2] + "')";
    document.getElementById('footer').style.backgroundImage = "url(" + "'assets/images/sidewalks/" + sidewalksList[currentBackgroundIndex][2] + "')";

    document.getElementById('sidewalk').style.backgroundSize = 'cover';
    document.getElementById('langBox').style.backgroundSize = 'contain';
    document.getElementById('externalLinks').style.backgroundSize = 'cover'; 
    
  }
  

  setTimeout(() => {

    sidewalk();

  }, 2500);

}

setTimeout(() => {

  sidewalk();


}, 2500);













function registerBackgroundOn(){

  document.getElementById('register').style.backgroundColor = 'purple';

}

function registerBackgroundOff(){

  document.getElementById('register').style.backgroundColor = '';

}

function locationBackgroundOn(){

  document.getElementById('event-location').style.backgroundColor = 'purple';

}

function locationBackgroundOff(){

  document.getElementById('event-location').style.backgroundColor = '';

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

  console.log('test');

  if (currentInfoText===(len)){currentInfoText = 0};


  document.getElementById('wiki').src = infoImgList[currentInfoText];

}

function previewsWikiInfo(){

  currentInfoText -= 1;

  console.log('test');

  if (currentInfoText===-1){currentInfoText = (len - 1) };

  document.getElementById('wiki').src = infoImgList[currentInfoText];
  

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


    document.getElementById("lema1").textContent = 'TEST DRIVEN';
    if (window.matchMedia("(max-width: 900px)").matches){

      document.getElementById("lema1").style.fontSize = '4vw';

    } else{
      document.getElementById("lema1").style.fontSize = '1.2vw';
    }


    document.getElementById("lema2").textContent = 'READABLE';
    document.getElementById("lema3").textContent = 'SCALABLE';
    document.getElementById("lema4").textContent = 'RESPONSIVE';
    
    document.getElementById("next-event").textContent = 'Next Event:';
    document.getElementById("event-time").textContent = '📅 12/06/2022 19h';
    document.getElementById("event-location").textContent = '🗺️ Labcodes Software Studio, Praça do Derby, 149, Sala 1109.';
    document.getElementById("event-register").textContent = 'Register:';

    document.getElementById("cardEvent").textContent = 'EVENTS';

    document.getElementById("littleCard-next").textContent = 'NEXT EVENTS';
    document.getElementById("littleCard-galery").textContent = 'GALERY';
    document.getElementById("littleCard-how").textContent = 'HOW IT WORKS';
    document.getElementById("littleCard-starting").textContent = 'STARTING TO CODE';
    document.getElementById("littleCard-good").textContent = 'GOOD PRACTICES';
    document.getElementById("littleCard-dojo").textContent = 'VIRTUAL DOJO';

    document.getElementById("hacks").textContent = 'HACKS & TIPS';

  } else {
    
    currentLang = 'PT';
    currentLangIndex = 0;


    document.getElementById("lema1").textContent = 'ORIENTADO A TESTE';
    if (window.matchMedia("(max-width: 900px)").matches){

      document.getElementById("lema1").style.fontSize = '4vw';

    } else{
      document.getElementById("lema1").style.fontSize = '1.2vw';
    }


    document.getElementById("lema2").textContent = 'LEGÍVEL';
    document.getElementById("lema3").textContent = 'ESCALONÁVEL';
    document.getElementById("lema4").textContent = 'RESPONSIVO';

    document.getElementById("next-event").textContent = 'Próximo Evento:'; 
    document.getElementById("event-time").textContent = '📅 06/12/2022 19h';
    document.getElementById("event-location").textContent = '🗺️ Labcodes Software Studio, Praça do Derby, 149, Sala 1109.';
    document.getElementById("event-register").textContent = 'Inscreva-se:';

    document.getElementById("cardEvent").textContent = 'EVENTOS';

    document.getElementById("littleCard-next").textContent = 'PRÓXIMOS EVENTOS';
    document.getElementById("littleCard-galery").textContent = 'GALERIA';
    document.getElementById("littleCard-how").textContent = 'COMO FUNCIONA';
    document.getElementById("littleCard-starting").textContent = 'COMEÇANDO A CODAR';
    document.getElementById("littleCard-good").textContent = 'BOAS PRÁTICAS';
    document.getElementById("littleCard-dojo").textContent = 'DOJO VIRTUAL';

    document.getElementById("hacks").textContent = 'HACKS & DICAS';

  }


  
}



function configVideoBox(){

    
  //console.log(document.getElementById('video').contentWindow.document.getElementsByTagName("video")[0]);

  document.getElementById('video').contentWindow.document.getElementsByTagName("video")[0].controls = false;
  document.getElementById('video').contentWindow.document.getElementsByTagName("video")[0].loop = true;
  document.getElementById('video').contentWindow.document.getElementsByTagName("video")[0].muted = true;
  document.getElementById('video').contentWindow.document.getElementsByTagName("video")[0].style.margin = 0;
  document.getElementById('video').contentWindow.document.getElementsByTagName("video")[0].play();
  

  document.getElementById('doCaosALama').play();
  
  document.getElementById('video').contentWindow.document.getElementsByTagName("video")[0].disablePictureInPicture = true;
  document.getElementById('video').contentWindow.document.getElementsByTagName("video").media.disablePictureInPicture = true;

}
