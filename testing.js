class Service {
  constructor(devCost, trendiness, openSource, devSpeed, performance) {
    this.devCost = devCost; // 0-10
    this.trendiness = trendiness; // 0-10
    this.openSource = openSource; // 0-1
    this.devSpeed = devSpeed; // 0-10
    this.performance = performance; // 0-10
  }
}

var Python = new Service(7, 8, 1, 8, 3);
var Ruby = new Service(7, 8, 1, 8, 3);
var Node = new Service(7, 8, 1, 8, 3);
var Java = new Service(7, 8, 1, 8, 3);
var CSharp = new Service(7, 8, 1, 8, 3);

console.log(Python.trendiness);

