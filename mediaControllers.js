let howItWorksVideoState = 0;
function howItWorksVideo(){

  if (howItWorksVideoState === 0){

    document.getElementById('doCaosALama').pause();
    document.getElementsByTagName("video")[0].pause();
    document.getElementById('howItWorks-video').currentTime = 0;
    howItWorksVideoState = 1;

    setTimeout(() => {
      document.getElementById('howItWorks-video').play();
    }, 2000);

  }
  else{

    document.getElementById('howItWorks-video').pause();
    document.getElementById('doCaosALama').play();
    document.getElementsByTagName("video")[0].play();
    document.getElementById('doCaosALama').currentTime = 0;
    document.getElementsByTagName("video")[0].currentTime = 0;
    howItWorksVideoState = 0;
    

  }

}

function videoStop(){

  document.getElementById('howItWorks-video').pause();
  document.getElementById('doCaosALama').play();
  document.getElementById('doCaosALama').currentTime = 0;
  document.getElementsByTagName("video")[0].muted = false;
  document.getElementsByTagName("video")[0].currentTime = 0;
  howItWorksVideoState = 0;

}
  




function configVideoBox(){

    
    //console.log(document.getElementsByTagName("video")[0]);
  
    document.getElementsByTagName("video")[0].controls = false;
    document.getElementsByTagName("video")[0].loop = true;
    document.getElementsByTagName("video")[0].muted = false;
    document.getElementsByTagName("video")[0].style.margin = 0;
    document.getElementsByTagName("video")[0].play();
    document.getElementsByTagName("audio")[0].play();
  
    if (document.getElementsByTagName("video")[0].paused === false){
  
      document.getElementById('video-play-button').src = "./assets/images/pause.png";
      document.getElementById('video-play-button').style.transition = 'all 2s';
      document.getElementById('video-play-button').style.opacity = 0;
  
      videoState = 'playing';
  
  
    }
  
  
  
    
  }
  
  let videoState = 'paused';
  function playVideo(){
  
    if (videoState === 'paused'){
  
      document.getElementsByTagName("video")[0].controls = false;
      document.getElementsByTagName("video")[0].loop = true;
      document.getElementsByTagName("video")[0].muted = false;
      document.getElementsByTagName("video")[0].style.margin = 0;
      document.getElementsByTagName("video")[0].play();
      document.getElementsByTagName("audio")[0].play();
    
      document.getElementsByTagName("audio")[0].currentTime = 0;
      document.getElementsByTagName("video")[0].currentTime = 0;
    
      document.getElementById('video-play-button').src = "./assets/images/pause.png";
      document.getElementById('video-play-button').style.transition = 'all 2s';
      document.getElementById('video-play-button').style.opacity = 0;
  
      videoState = 'playing';
      
  
    } else {
  
      document.getElementsByTagName("video")[0].pause();
      document.getElementsByTagName("audio")[0].pause();
      document.getElementById('video-play-button').src = "./assets/images/play.png";
  
      videoState = 'paused';
  
    }
  
  
  
  }



function updateAudioIconState(state){

    document.getElementById('bar-play-button').style.opacity = 0.6;
  
  
    if (state === 'pause'){
  
      document.getElementById('bar-play-button').src = "./assets/images/play.png";
  
    }
  
    if (state === 'play'){  
  
      document.getElementById('bar-play-button').src = "./assets/images/pause.png";
  
  
    };
  
  }
  
  
  function playAudio(){
    
    if (document.getElementsByTagName("audio")[0].paused === true){
      
      document.getElementsByTagName("audio")[0].currentTime = 0;
      document.getElementsByTagName("audio")[0].play();
      document.getElementById('bar-play-button').src = "./assets/images/pause.png";
  
      return
      
    } 
    
    if (document.getElementsByTagName("audio")[0].paused === false){
      document.getElementsByTagName("audio")[0].pause();
      document.getElementById('bar-play-button').src = "./assets/images/play.png";
  
      return
      
    }
    
  }
  