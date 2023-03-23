function mapViewerOn(){

    document.getElementById('map-container').style.opacity = 1;
    document.getElementById('map-container').style.zIndex = 1001;

}

function mapViewerOff(){

    document.getElementById('map-container').style.opacity = 0;
    document.getElementById('map-container').style.zIndex = 999;
    
}