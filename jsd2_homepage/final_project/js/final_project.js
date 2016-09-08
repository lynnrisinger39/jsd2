<script type="text/javascript">
    $(function() {
        var params = {
            // Request parameters
        };
      
        $.ajax({
            url: "https://api.fantasydata.net/mlb/v2/{format}/teams?" + $.param(params),
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","5e2a5ce1853e470a81bd6355e3321b4c");
            },
            type: "GET",
            // Request body
            data: "{body}",
        })
        .done(function(data) {
            alert("success");
        })
        .fail(function() {
            alert("error");
        });
    });
    -->
     <style>
      html, body {
        height: 0%;
        margin: 0;
        padding: 10;
      }
      .map {
        height: 100%;
        width:100%;
      }
        </style>
</script>
<!-- 
navigator.geolocation.getCurrentPosition(updateLocation);
 var map;

function updateLocation(positionObject){
   var lat = position.coords.latitude;
   var lng = position.coords.longitude;

   var marker = new google.maps.Marker({
    map: map,
    position: {
        lat: lat,
        lng: lng
    }
   })*/

 -->
 <script>
 function createMarker(place){
         var marker = new google.maps.Marker({
            map: map,
            title: "GA",
            position:place.geometry.location
    });
var mapElement = document.querySelector('.map');
var options = {
    center: {lat:37.790841,lng:-122.40128},
    zoom: 10

};
function initMap(){
console.log('initMap')

    var map;
    map = new google.maps.Map(mapElement, options)
    console.log('initMap');
    var marker = new google.maps.Marker({map: map,
        title: "GA",
        position:{lat:37.790841,lng:-122.40128}
    });
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
        location:{lat:37.790841,lng:-122.40128},
        radius:100,
        type: ['store']
    },
        displayResults);

    function displayResults(results, status){
        console.log('displayResults');

        debugger

/*        results.forEach(createMarker)
*/    }
    function createMarker(place){
         var marker = new google.maps.Marker({
            map: map,
            title: "GA",
            position:place.geometry.location
    });
    }

}


};

}
</script>