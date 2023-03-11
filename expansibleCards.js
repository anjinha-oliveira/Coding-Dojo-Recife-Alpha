function expandSubject(card, subject){

    document.getElementById(card).style.transition = 'opacity 1s';
    document.getElementById(card).style.opacity = 0;
    document.getElementById(subject).hidden = true;
    
    setTimeout(() => {
      
      document.getElementById(card).hidden = true;
      document.getElementById(subject).hidden = false;
      document.getElementById(subject).style.opacity = 1;
  
    }, 1000); 
  
  }
  
  
  
  function expandViewForVideo(){

    if (window.innerWidth < 900){

      document.getElementsByClassName('card-block-A')[0].style.paddingLeft = 0; 
      document.getElementsByClassName('card-block-A')[0].style.paddingRight = 0;
  
    }

  
  }

  function returnViewToNormal(){

      document.getElementsByClassName('card-block-A')[0].style.paddingLeft = '40px'; 
      document.getElementsByClassName('card-block-A')[0].style.paddingRight = '40px';

  }
  