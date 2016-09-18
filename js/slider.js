class City {
  constructor(name, one, two, three, four, five, score) {
    this.name = name;
    this.one = one; // 1-100
    this.two = two; // 1-100
    this.three = three; // 1-100
    this.four = four; // 1-100
    this.five = five; // 1-100
    this.score = score; // 1-100
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
    new City("Toronto, Ontario", 1, 2, 3, 4, 5, 1),
    new City("Montreal, Quebec", 100, 100, 100, 100, 100, 1),
    new City("Vancouver, British Columbia", 1, 1, 1, 1, 1, 1),
    new City("Ottawa, Ontario", 1, 1, 1, 1, 1, 1),
    new City("Calgary, Alberta", 1, 1, 1, 1, 1, 1),
    new City("Edmonton, Alberta", 1, 1, 1, 1, 1, 1),
    new City("Québec City, Quebec", 1, 1, 1, 1, 1, 1),
    new City("Winnipeg, Manitoba", 1, 1, 1, 1, 1, 1),
    new City("Hamilton, Ontario", 1, 1, 1, 1, 1, 1),
    new City("Waterloo, Ontario", 1, 1, 1, 1, 1, 1),
    new City("London, Ontario", 1, 1, 1, 1, 1, 1),
    new City("Niagara, Ontario", 1, 1, 1, 1, 1, 1),
    new City("Halifax, Nova Scotia", 1, 1, 1, 1, 1, 1),
    new City("Oshawa, Ontario", 1, 1, 1, 1, 1, 1),
    new City("Victoria, British Columbia", 1, 1, 1, 1, 1, 1),
    new City("Windsor, Ontario", 1, 1, 1, 1, 1, 1),
    new City("Saskatoon, Saskatchewan", 1, 1, 1, 1, 1, 1),
    new City("Regina, Saskatchewan", 1, 1, 1, 1, 1, 1),
    new City("Sherbrooke, Quebec", 1, 1, 1, 1, 1, 1),
    new City("St. John's, Newfoundland", 1, 1, 1, 1, 1, 1),
    new City("Barrie, Ontario", 1, 1, 1, 1, 1, 1),
    new City("Kelowna, British Columbia", 1, 1, 1, 1, 1, 1),
    new City("Mission, British Columbia", 1, 1, 1, 1, 1, 1),
    new City("Greater Sudbury / Grand Sudbury, Ontario", 1, 1, 1, 1, 1, 1),
    new City("Kingston, Ontario", 1, 1, 1, 1, 1, 1)
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
      ul = '';
      for (var i = 0; i < data.length; ++i) {
        var ul = document.getElementById("myList");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode((i + 1) + ":  " + data[i].name));
        ul.appendChild(li);
      }
    }

    update();

});
