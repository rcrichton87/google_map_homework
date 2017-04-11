var initialize = function(){
  var center = {lat: 55.946846, lng: -3.201984}
  var container = document.getElementById('main-map');
  var mainMap = new MapWrapper(container, center, 10);

  var tokyoButton = document.querySelector('#tokyoButton');

  mainMap.addMarker(center, '<h1>CodeClan</h1> <p>37 Castle Terrace, Edinburgh EH1 2EL</p> <a href="https://codeclan.com/">Website,</a>');
  
  mainMap.addClickEvent(); 

  var handleTokyoButtonClick = function(){
    mainMap.googleMap.setCenter({lat: 35.696201, lng: 139.729614})
  }

  tokyoButton.onclick = handleTokyoButtonClick;

}



window.onload = initialize;