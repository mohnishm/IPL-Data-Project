let iplDataSet = require('./matchdata.json');
let deliveries = require('./deliveries.json');

var extraRuns = {};
var matchId2016 = [];

for (let object in iplDataSet){
  if(iplDataSet[object]["season"] == 2016){
    matchId2016.push(iplDataSet[object]["id"]);
  }
}

for (let ob in deliveries){
  if(matchId2016.includes(parseInt(deliveries[ob]["match_id"], 10))){
    if (!extraRuns.hasOwnProperty(deliveries[ob]["bowling_team"]))
      extraRuns[deliveries[ob]["bowling_team"]] = parseInt(deliveries[ob]["extra_runs"], 10);
    else
      extraRuns[deliveries[ob]["bowling_team"]] += parseInt(deliveries[ob]["extra_runs"], 10);
  }
}

console.log(extraRuns);