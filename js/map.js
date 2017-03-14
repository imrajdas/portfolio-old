
function myMap() {
  var myCenter = new google.maps.LatLng(20.3511638,85.8160236);
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: myCenter, zoom: 15};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);

  google.maps.event.addListener(marker,'click',function() {
    var pos = map.getZoom();
    map.setZoom(9);
    map.setCenter(marker.getPosition());
    window.setTimeout(function() {map.setZoom(pos);},3000);
  });
}
