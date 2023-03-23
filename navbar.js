function mapViewerOn(){

    document.getElementById('map-container').style.opacity = 0.94;
    document.getElementById('map-container').style.zIndex = 1001;

    document.getElementById('calendar-container').style.opacity = 0;
    document.getElementById('calendar-container').style.zIndex = 999;

    document.getElementById('register-container').style.opacity = 0;
    document.getElementById('register-container').style.zIndex = 999;

}

function mapViewerOff(){

    document.getElementById('map-container').style.opacity = 0;
    document.getElementById('map-container').style.zIndex = 999;

    markSelection(undefined);
    
}



function calendarViewerOn(){

    document.getElementById('calendar-container').style.opacity = 0.94;
    document.getElementById('calendar-container').style.zIndex = 1001;

    document.getElementById('map-container').style.opacity = 0;
    document.getElementById('map-container').style.zIndex = 999;

    
    document.getElementById('register-container').style.opacity = 0;
    document.getElementById('register-container').style.zIndex = 999;

}

function calendarViewerOff(){

    document.getElementById('calendar-container').style.opacity = 0;
    document.getElementById('calendar-container').style.zIndex = 999;

    markSelection(undefined);
    
}

function registerViewerOn(){

    document.getElementById('register-container').style.opacity = 0.94;
    document.getElementById('register-container').style.zIndex = 1001;

    document.getElementById('map-container').style.opacity = 0;
    document.getElementById('map-container').style.zIndex = 999;

    document.getElementById('calendar-container').style.opacity = 0;
    document.getElementById('calendar-container').style.zIndex = 999;

}

function registerViewerOff(){

    document.getElementById('register-container').style.opacity = 0;
    document.getElementById('register-container').style.zIndex = 999;

    markSelection(undefined);
    
}









function showTitle(menuOptionTitle) {

    document.getElementById('menu-option-title').innerHTML = menuOptionTitle;


}

function markSelection(selectionIndex){

    let infoBoxObjectList = document.getElementsByClassName('info-box');
    
    for (i = 0; i < infoBoxObjectList.length; i++){

        infoBoxObjectList[i].style.backgroundColor = 'transparent';

    }

    if(selectionIndex != undefined){

        infoBoxObjectList[selectionIndex].style.backgroundColor = '#ffffff';

    }

}

function selectEvent(eventIndex){

    let eventsBoxObjectList = document.getElementsByClassName('event-date-box');
    
    for (i = 0; i < eventsBoxObjectList.length; i++){

        eventsBoxObjectList[i].style.backgroundImage = 'linear-gradient(130deg, rgba(236, 236, 236, 0.664), rgba(255, 255, 255, 0.664),rgb(198, 198, 198),rgba(255, 255, 255, 0.824), rgba(255, 255, 255, 0.824))';
        eventsBoxObjectList[eventIndex].style.color = 'black';
        eventsBoxObjectList[eventIndex].style.backgroundColor = 'none';

    }

    eventsBoxObjectList[eventIndex].style.backgroundImage = 'none';
    eventsBoxObjectList[eventIndex].style.backgroundColor = 'black';
    eventsBoxObjectList[eventIndex].style.color = 'azure';



}