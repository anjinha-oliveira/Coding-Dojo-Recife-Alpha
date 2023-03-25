
currentBackgroundIndex = 0;
const sidewalksList = [['pastilhas.jpg','lang-top-background.png','lang-calcada.jpg', 'down-calcada.png', 'rgba(255, 255, 255, 0.811)', 'linear-gradient(90deg,transparent, rgba(70, 70, 70, 0.311),rgba(70, 70, 70, 0.311), transparent)'],['rachado.png','lang-top-background-rachado.png','rachado2.jpg', 'down-rachado.png','rgba(255,255,255,0.8)', 'linear-gradient(90deg,transparent, rgba(70, 70, 70, 0.211),rgba(70, 70, 70, 0.211), transparent)'], ['manguezal2.png','manguezal1.png','manguezal.jpg', 'manguezal3.png','rgba(255,255,255,0.8)', 'linear-gradient(90deg,transparent, rgba(70, 70, 70, 0.211),rgba(70, 70, 70, 0.211), transparent)']];

function sidewalk(){
    
    if (currentBackgroundIndex < sidewalksList.length){
        
        currentBackgroundIndex += 1;
        
    }
    else{
        
        currentBackgroundIndex = 0;
        
        
    };
    
    if (currentBackgroundIndex < sidewalksList.length){
        
        document.getElementById('sidewalk').style.backgroundImage = "url(" + "'assets/images/sidewalks/" + sidewalksList[currentBackgroundIndex][0] + "')";
        document.getElementById('sidewalk').style.color = sidewalksList[currentBackgroundIndex][4];
        document.getElementById('sidewalkText').style.backgroundImage = sidewalksList[currentBackgroundIndex][5];
        document.getElementById('topText').style.color = sidewalksList[currentBackgroundIndex][4];
        document.getElementById('topText').style.backgroundImage = sidewalksList[currentBackgroundIndex][5];
        
        
        
        
        document.getElementById('langBox').style.backgroundImage = "url(" + "'assets/images/sidewalks/" + sidewalksList[currentBackgroundIndex][1] + "')";
        // document.getElementById('externalLinks').style.backgroundImage = "url(" + "'assets/images/sidewalks/" + sidewalksList[currentBackgroundIndex][2] + "')";
        document.getElementById('footer').style.backgroundImage = "url(" + "'assets/images/sidewalks/" + sidewalksList[currentBackgroundIndex][2] + "')";
        document.getElementById('header-body-frontier').style.backgroundImage = "url(" + "'assets/images/sidewalks/" + sidewalksList[currentBackgroundIndex][3] + "')";
        
        document.getElementById('sidewalk').style.backgroundSize = 'cover';
        document.getElementById('langBox').style.backgroundSize = 'contain';
        // document.getElementById('externalLinks').style.backgroundSize = 'cover'; 
        
    }
    
    
    setTimeout(() => {
        
        sidewalk();
        
    }, 2500);
    
}

setTimeout(() => {
    
    sidewalk();
    
    
}, 2500);



function moddedLogo(){document.getElementById('dojo-art').src="./assets/images/dojo-badge-alt.png";}

function normalLogo(){document.getElementById('dojo-art').src="./assets/images/dojo-badge.png";}



setTimeout(() => {

    document.getElementsByTagName('body')[0].style.transition ='all 4s';
    document.getElementsByTagName('body')[0].style.opacity = 1;
  
    setTimeout(() => {
  
      document.getElementsByTagName('body')[0].style.transition ='all 0s';
      
    }, 5000);
    
  }, 100);
  