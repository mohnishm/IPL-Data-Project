let iplDataSet = require('./matchdata.json');
let deliveries = require('./deliveries.json');

var batAvg = {}
var matchId2012 = [];

for (let object in iplDataSet){
  if(iplDataSet[object]["season"] == 2012){
    matchId2012.push(iplDataSet[object]["id"]);
  }
}

function matches(batsman){
  var matches = [];
  for (var key in deliveries){
    if(matchId2012.includes(parseInt(deliveries[key]["match_id"]))){
      if(deliveries[key]["batsman"] == batsman){
        matches.push(deliveries[key]["match_id"]);
      }
    }
  }
  return matches.filter((v,i) => matches.indexOf(v) === i).length;
}

for(let ob in deliveries){
    if(matchId2012.includes(parseInt(deliveries[ob]["match_id"]))){
      if (!batAvg.hasOwnProperty(deliveries[ob]["batsman"])){
        batAvg[deliveries[ob]["batsman"]] = parseInt(deliveries[ob]["batsman_runs"]);
      }
      else
        batAvg[deliveries[ob]["batsman"]] += parseInt(deliveries[ob]["batsman_runs"]);
    }
}

var avg = [];
for (var key in batAvg){
  avg.push([key, batAvg[key]]);
}

avg = avg.filter((a) => a[1] >= 300);

for(var i = 0; i < avg.length; i++){
  avg[i][1] = Math.round(avg[i][1]/matches(avg[i][0]) * 100)/100;
}

avg.sort(function(a, b) {
  return b[1] - a[1];
});

for(var i = 0; i < 10; i++){
  console.log(avg[i]);
}