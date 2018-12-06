let iplDataSet = require('./matchdata.json');
let deliveries = require('./deliveries.json');

var econ = {};
var matchId2015 = [];

for (let object in iplDataSet){
  if(iplDataSet[object]["season"] == 2015){
    matchId2015.push(iplDataSet[object]["id"]);
  }
}

function overs(bowler){
  var balls = 0;
  for (var key in deliveries){
    if(matchId2015.includes(parseInt(deliveries[key]["match_id"]))){
      if(deliveries[key]["bowler"] == bowler){
        balls += 1;
      }
    }
  }
  return balls/6;
}

for(let ob in deliveries){
  if(matchId2015.includes(parseInt(deliveries[ob]["match_id"]))){
    if (!econ.hasOwnProperty(deliveries[ob]["bowler"])){
      econ[deliveries[ob]["bowler"]] = parseInt(deliveries[ob]["total_runs"]);
    }
    else
      econ[deliveries[ob]["bowler"]] += parseInt(deliveries[ob]["total_runs"]);
  }
}

for (let key in econ){
  econ[key] = Math.round((econ[key]/overs(key)) * 100)/100;
}

var economy = Object.keys(econ).map(function(key) {
  return [key, econ[key]];
}).sort(function(a, b){ return a[1] - b[1]; });

for (var i = 0; i < 10; i++){
  console.log(economy[i]);
}
