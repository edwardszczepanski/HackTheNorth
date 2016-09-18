class City {
  constructor(name, one, two, three, four, five, score, lat, lng) {
    this.name = name;
    this.one = one; // 1-100
    this.two = two; // 1-100
    this.three = three; // 1-100
    this.four = four; // 1-100
    this.five = five; // 1-100
    this.score = score; // 1-100
    this.lat = lat;
    this.lng = lng;
  }
}
class Importance {
  constructor(one, two, three, four, five) {
    this.one = one; // 1-10
    this.two = two; // 1-10
    this.three = three; // 1-10
    this.four = four; // 1-10
    this.five = five; // 1-10
  }
}

function initMap(data ) {
  var mapOptions = {
    zoom: 4,
    center: {lat: 43.4643, lng: -80.5204}
  }

  map = new google.maps.Map(document.getElementById('map'), mapOpionts);
}

function updateMap(data) {
  for (var i = 0; i < data.length; ++i) {
    markerNumber = i + 1;

    var latitude = data[i].lat;
    var longitude = data[i].lng;

    var image = "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=" +   markerNumber + "|FE6256|000000";

    var Marker = new google.maps.Marker({
      position: {lat: latitude, lng: longtitude},
      map: map,
      icon: image
    });
  }
}

$(function() {
    var one   = 50;
    var two   = 50;
    var three = 50;
    var four  = 50;
    var five  = 50;

    var slide1 = document.getElementById('slide1');
    var slide2 = document.getElementById('slide2');
    var slide3 = document.getElementById('slide3');
    var slide4 = document.getElementById('slide4');
    var slide5 = document.getElementById('slide5');

    var cityData = [
    new City("Toronto, Ontario", 1, 2, 3, 4, 5, 1, 43.625985,-79.542025),
    new City("Montreal, Quebec", 100, 100, 100, 100, 100, 1, 45.488221,-73.565538),
    new City("Vancouver, British Columbia", 1, 1, 1, 1, 1, 1, 49.208871,-122.901347),
    new City("Ottawa, Ontario", 1, 1, 1, 1, 1, 1, 45.4215296, -75.6971931),
    new City("Calgary, Alberta", 1, 1, 1, 1, 1, 1, 51.040992,-114.030466),
    new City("Edmonton, Alberta", 1, 1, 1, 1, 1, 1, 53.544389, -113.4909267),
    new City("Québec City, Quebec", 1, 1, 1, 1, 1, 1, 46.753463,-71.430106),
    new City("Winnipeg, Manitoba", 1, 1, 1, 1, 1, 1, 49.8997541, -97.1374937),
    new City("Hamilton, Ontario", 1, 1, 1, 1, 1, 1, 43.261401,-79.887032),
    new City("Waterloo, Ontario", 1, 1, 1, 1, 1, 1, 43.4642578, -80.5204096),
    new City("London, Ontario", 1, 1, 1, 1, 1, 1, 42.9870, -81.2432),
    new City("Niagara, Ontario", 1, 1, 1, 1, 1, 1, 43.107186,-79.006539),
    new City("Halifax, Nova Scotia", 1, 1, 1, 1, 1, 1, 44.674538,-63.614545),
    new City("Oshawa, Ontario", 1, 1, 1, 1, 1, 1, 43.91888,-78.859159),
    new City("Victoria, British Columbia", 1, 1, 1, 1, 1, 1, 49.205529,-122.907447),
    new City("Windsor, Ontario", 1, 1, 1, 1, 1, 1, 42.329805,-83.037058),
    new City("Saskatoon, Saskatchewan", 1, 1, 1, 1, 1, 1, 52.1332, -106.6700),
    new City("Regina, Saskatchewan", 1, 1, 1, 1, 1, 1, 50.4452, -104.6189),
    new City("Sherbrooke, Quebec", 1, 1, 1, 1, 1, 1, 45.4010, 71.8824),
    new City("St. John's, Newfoundland", 1, 1, 1, 1, 1, 1, 47.577628,-52.703957),
    new City("Barrie, Ontario", 1, 1, 1, 1, 1, 1, 44.3894, 79.6903),
    new City("Kelowna, British Columbia", 1, 1, 1, 1, 1, 1, 49.8880, 119.4960),
    new City("Mission, British Columbia", 1, 1, 1, 1, 1, 1, 49.20703,-122.96061),
    new City("Greater Sudbury / Grand Sudbury, Ontario", 1, 1, 1, 1, 1, 1, 46.5221, 80.9530),
    new City("Kingston, Ontario", 1, 1, 1, 1, 1, 1, 44.2312, 76.4860)
    ];

    slide1.oninput = function(){
        one = this.value;
        update();
    }
    slide2.oninput = function(){
        two = this.value;
        update();
    }
    slide3.oninput = function(){
        three = this.value;
        update();
    }
    slide4.oninput = function(){
        four = this.value;
        update();
    }
    slide5.oninput = function(){
        five = this.value;
        update();
    }

    function update(){
        create(cityData);
        cityData.sort(compare);
        generateList(cityData);
        updateMap(cityData);
        console.log(cityData);
    }

    function compare(a, b) {
        if (a.score > b.score) {
            return -1;
        } else {
            return 1;
        }
    }

    function create(data){
        for (var i = 0; i < data.length; ++i){
            if (true) {
                var sum = 0;
                sum += data[i].one   * one;
                sum += data[i].two   * two;
                sum += data[i].three * three;
                sum += data[i].four  * four;
                sum += data[i].five  * five;
                data[i].score = sum;
            } else {
                // Yelp Integration will come later
            }
        }
    }

    function generateList(data){
      var ul = document.getElementById("myList");
      ul.innerHTML = '';
      for (var i = 0; i < data.length; ++i) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode((i + 1) + ":  " + data[i].name));
        ul.appendChild(li);
      }
    }


    update();


});
