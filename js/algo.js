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

var cityData = [
new City("Toronto, Ontario", 1, 1, 1, 1, 1, 1),
new City("Montreal, Quebec", 1, 1, 1, 1, 1, 1),
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

var exampleImportance = new Importance(4,3,4,2,1);

function create(importance, array){
    console.log("Hello world");
}
