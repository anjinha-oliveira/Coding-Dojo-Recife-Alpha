let currentLang = 'PT';
let counter = 0;
function langSelection() {

  counter += 1;

  if ((counter%2) != 0){

    currentLang = 'EN';
    currentLangIndex = 1;

    
    document.getElementById("next-event").textContent = 'Next Event(#7):';
    document.getElementById("event-time").textContent = '📅 03/14/2023 19h';
    document.getElementById("event-register").textContent = 'Register:';

    document.getElementById("next-events").textContent = 'EVENTS';

    document.getElementById("littleCard-next").textContent = 'NEXT EVENTS';
    document.getElementById("littleCard-gallery").textContent = 'GALLERY';
    document.getElementById("littleCard-how").textContent = 'HOW IT WORKS';
    document.getElementById("littleCard-startingCoding").textContent = 'STARTING TO CODE';
    document.getElementById("littleCard-goodPractices").textContent = 'GOOD PRACTICES';


    document.getElementById("exp-next").textContent = 'NEXT EVENTS';
    document.getElementById("exp-gallery").textContent = 'GALLERY';
    document.getElementById("exp-how").textContent = 'HOW IT WORKS';
    document.getElementById("exp-coding").textContent = 'STARTING TO CODE';
    document.getElementById("exp-good").textContent = 'GOOD PRACTICES';

  } else {
    
    currentLang = 'PT';
    currentLangIndex = 0;


    document.getElementById("next-event").textContent = 'Próximo Evento(#7):'; 
    document.getElementById("event-time").textContent = '📅 14/03/2022 19h';
    document.getElementById("event-register").textContent = 'Inscreva-se:';

    document.getElementById("next-events").textContent = 'EVENTOS';

    document.getElementById("littleCard-next").textContent = 'PRÓXIMOS EVENTOS';
    document.getElementById("littleCard-gallery").textContent = 'GALERIA';
    document.getElementById("littleCard-how").textContent = 'COMO FUNCIONA';
    document.getElementById("littleCard-startingCoding").textContent = 'COMEÇANDO A CODAR';
    document.getElementById("littleCard-goodPractices").textContent = 'BOAS PRÁTICAS';

    document.getElementById("exp-next").textContent = 'PRÓXIMOS EVENTOS';
    document.getElementById("exp-gallery").textContent = 'GALERIA';
    document.getElementById("exp-how").textContent = 'COMO FUNCIONA';
    document.getElementById("exp-coding").textContent =  'COMEÇANDO A CODAR';
    document.getElementById("exp-good").textContent = 'BOAS PRÁTICAS';

  }


  
}

