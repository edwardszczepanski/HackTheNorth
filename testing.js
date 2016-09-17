class Service {
  constructor(devCost, trendiness, openSource, devSpeed, performance) {
    this.devCost = devCost; // 0-10
    this.trendiness = trendiness; // 0-10
    this.openSource = openSource; // 0-1
    this.devSpeed = devSpeed; // 0-10
    this.performance = performance; // 0-10
  }
}

// Backend Categories
var Python = new Service(7, 8, 1, 8, 3);
var Ruby = new Service(7, 8, 1, 8, 3);
var Node = new Service(7, 8, 1, 8, 3);
var Java = new Service(7, 8, 1, 8, 3);
var CSharp = new Service(7, 8, 1, 8, 3);

// Front end framework, DB, backend language, 
var React = new Service(7, 8, 1, 8, 3);
var Angular = new Service(7, 8, 1, 8, 3);
var jQuery = new Service(7, 8, 1, 8, 3);
var Backbone = new Service(7, 8, 1, 8, 3);
var Ember = new Service(7, 8, 1, 8, 3);

// Database
var MongoDB = new Service(7, 8, 1, 8, 3);
var PostgreSQL = new Service(7, 8, 1, 8, 3);
var MySQL = new Service(7, 8, 1, 8, 3);
var CockroachDB = new Service(7, 8, 1, 8, 3);
var Cassandra = new Service(7, 8, 1, 8, 3);


