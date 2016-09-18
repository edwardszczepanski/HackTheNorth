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

// One is Rent
// Two is CPI
// Three is Unemployment Rate
// Four is Population

var cityData = [
  new City("Toronto, Ontario", 15, 32, 48, 100, 1, 1, 43.625985,-79.542025),
  new City("Montreal, Quebec", 76, 50, 75, 66, 1, 1, 45.488221,-73.565538),
  new City("Vancouver, British Columbia", 0, 66, 86, 40, 1, 1, 49.208871,-122.901347),
  new City("Ottawa, Ontario", 52, 42, 55, 20, 1, 1, 45.4215296, -75.6971931),
  new City("Calgary, Alberta", 20, 0, 0, 22, 1, 1, 51.040992,-114.030466),
  new City("Edmonton, Alberta", 26, 6, 25, 21, 1, 1, 53.544389, -113.4909267),
  new City("Québec City, Quebec", 76, 51, 96, 11, 1, 1, 46.753463,-71.430106),
  new City("Winnipeg, Manitoba", 43, 41, 48, 11, 1, 1, 49.8997541, -97.1374937),
  new City("Hamilton, Ontario", 36, 69, 53, 11, 1, 1, 43.261401,-79.887032),
  new City("Waterloo, Ontario", 51, 58, 71, 6, 1, 1, 43.4642578, -80.5204096),
  new City("Halifax, Nova Scotia", 39, 32, 86, 5, 1, 1, 44.674538,-63.614545),
  new City("Victoria, British Columbia", 30, 83, 100, 4, 1, 1, 49.205529,-122.907447),
  new City("Windsor, Ontario", 69, 50, 69, 3, 1, 1, 42.329805,-83.037058),
  new City("Saskatoon, Saskatchewan", 57, 18, 61, 3, 1, 1, 52.1332, -106.6700),
  new City("Regina, Saskatchewan", 41, 16, 84, 2, 1, 1, 50.4452, -104.6189),
  new City("Sherbrooke, Quebec", 100, 65, 75, 1, 1, 1, 45.4010, 71.8824),
  new City("St. John's, Newfoundland", 78, 30, 50, 1, 1, 1, 47.577628,-52.703957),
  new City("Barrie, Ontario", 33, 47, 32, 1, 1, 1, 44.3894, 79.6903),
  new City("Kelowna, British Columbia", 59, 100, 57, 1, 1, 1, 49.8880, 119.4960),
  new City("Kingston, Ontario", 22, 42, 71, 0, 1, 1, 44.2312, 76.4860)
];

var markerList = [];

function setMarkers(data) {
  for (var i = 0; i < data.length; ++i) {
    var markerNumber = i + 1;
    var city = data[i];
    var image = "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=" +   markerNumber + "|FE6256|000000";
    var zValue = data.length - i;
    var marker = new google.maps.Marker({
      position: {lat: city.lat, lng: city.lng},
      map: map,
      title: city.name,
      icon: image,
      zIndex: zValue
    });
    markerList.push(marker);
  }
}

function reloadMarkers() {
  for (var i=0; i<markerList.length; i++) {
    markerList[i].setMap(null);
  }
  markerList = [];

  setMarkers(cityData);
}

function initMap(data) {
  var mapOptions = {
    zoom: 4,
    center: {lat: 43.4643, lng: -80.5204}
  }

  map = new google.maps.Map(document.getElementById('map'), mapOptions);

  setMarkers(cityData);
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
    reloadMarkers(cityData);
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
