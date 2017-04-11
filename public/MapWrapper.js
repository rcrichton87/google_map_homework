var MapWrapper = function(container, coords, zoom){

  this.googleMap = new google.maps.Map(container, { 
    center: coords,  
    zoom: zoom
  }); 

}

MapWrapper.prototype = {

  addMarker: function(coords, text){
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    })

    if(text){
      var infowindow = new google.maps.InfoWindow({
        content: text
      });

      marker.addListener('click', function() {
        infowindow.open(this.googleMap, marker);
      });
    }
  },

  addClickEvent: function(){
    google.maps.event.addListener(this.googleMap, 'click', function(event){

      var coords = {lat: event.latLng.lat(), lng: event.latLng.lng()}
      
      this.addMarker(coords); 

    }.bind(this)) 
  },

}


