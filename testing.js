class Service {
  constructor(devCost, trendiness, openSource, devSpeed, performance) {
    this.devCost = devCost; // 1-10
    this.trendiness = trendiness; // 1-10
    this.openSource = openSource; // 1-2
    this.devSpeed = devSpeed; // 1-10
    this.performance = performance; // 1-10
  }
}

class Importance {
  constructor(devCost, trendiness, openSource, devSpeed, performance) {
    this.devCost = devCost; // 1-4
    this.trendiness = trendiness; // 1-4
    this.openSource = openSource; // 1-4
    this.devSpeed = devSpeed; // 1-4
    this.performance = performance; // 1-4
  }
}

// Backend Categories
var Python = new Service(7, 8, 1, 8, 3);
var Ruby = new Service(7, 8, 1, 8, 3);
var Node = new Service(7, 8, 1, 8, 3);
var Java = new Service(7, 8, 1, 8, 3);
var CSharp = new Service(7, 8, 1, 8, 3);
var backendArray = [Python, Ruby, Node, Java, CSharp, backendArray];

// Front end framework, DB, backend language,
var React = new Service(7, 8, 1, 8, 3);
var Angular = new Service(7, 8, 1, 8, 3);
var jQuery = new Service(7, 8, 1, 8, 3);
var Backbone = new Service(7, 8, 1, 8, 3);
var Ember = new Service(7, 8, 1, 8, 3);
var frontendArray = [React, Angular, jQuery, Backbone, Ember];

// Database
var MongoDB = new Service(7, 8, 1, 8, 3);
var PostgreSQL = new Service(7, 8, 1, 8, 3);
var MySQL = new Service(7, 8, 1, 8, 3);
var CockroachDB = new Service(7, 8, 1, 8, 3);
var Cassandra = new Service(7, 8, 1, 8, 3);
var databaseArray = [MongoDB, PostgreSQL, MySQL, CockroachDB, Cassandra];

var exampleImportance = new Importance(4,3,4,2,1);
var 2DArray = [backendArray, frontendArray, databaseArray];

function create(importance, 2DArray){
    for(int i = 0; i < 2DArray.length; ++i){
        console.log(2DArray[i][0].devCost);
    }
    console.log("Hello world");
}
