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
  
  
  
  