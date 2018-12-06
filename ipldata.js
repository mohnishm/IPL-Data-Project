let iplDataSet = require('./matchdata.json');
let deliveries = require('./deliveries.json');

//Question 1
let matches = {};

for (var obj in iplDataSet){
    if (!matches.hasOwnProperty(iplDataSet[obj]["season"]))
      matches[iplDataSet[obj]["season"]] = 1;
    else
      matches[iplDataSet[obj]["season"]] += 1;
}

// ===========================================================================================
// Question 2

function matchesWon(years){
  let winners = {};
  for (var obj in iplDataSet){
    if (iplDataSet[obj]["season"] == years){
      if(!winners.hasOwnProperty(iplDataSet[obj]["winner"]))
        winners[iplDataSet[obj]["winner"]] = 1;
      else
        winners[iplDataSet[obj]["winner"]] += 1;
    }
  }
  return winners;
}

var winners = {};

for (var ob in iplDataSet){
  if (!winners.hasOwnProperty(iplDataSet[ob]["season"]))
    winners[iplDataSet[ob]["season"]] = matchesWon(iplDataSet[ob]["season"]);
}

// ============================================================================================
// Question 3

var extraRuns = {};
var matchId2016 = [];

for (let object in iplDataSet){
  if(iplDataSet[object]["season"] == 2016){
    matchId2016.push(iplDataSet[object]["id"]);
  }
}
console.log(matchId2016);
for (let ob in deliveries){
  if(matchId2016.includes(parseInt(deliveries[ob]["match_id"], 10))){
    if (!extraRuns.hasOwnProperty(deliveries[ob]["bowling_team"]))
      extraRuns[deliveries[ob]["bowling_team"]] = parseInt(deliveries[ob]["extra_runs"], 10);
    else
      extraRuns[deliveries[ob]["bowling_team"]] += parseInt(deliveries[ob]["extra_runs"], 10);
  }
}

// ===================================================================================================
// Question 4

// var econ = {};
// var matchId2015 = [];

// for (let object in iplDataSet){
//   if(iplDataSet[object]["season"] == 2015){
//     matchId2015.push(iplDataSet[object]["id"]);
//   }
// }

// function overs(bowler){
//   var arr = [];
//   for (var key in deliveries){
//     if(deliveries[key]["bowler"] == bowler){
//       arr.push(parseInt(deliveries[key]["over"], 10));
//     }
//   }
//   return arr.filter(function(item, pos, arr){
//     // Always keep the 0th element as there is nothing before it
//     // Then check if each element is different than the one before it
//     return pos === 0 || item !== arr[pos-1];
//   }).length;
// }

// for(let ob in deliveries){
//   if(matchId2015.includes(parseInt(deliveries[ob]["match_id"], 10))){
//     if (!econ.hasOwnProperty(deliveries[ob]["bowler"])){
//       econ[deliveries[ob]["bowler"]] = parseInt(deliveries[ob]["total_runs"], 10);
//     }
//     else
//       econ[deliveries[ob]["bowler"]] += parseInt(deliveries[ob]["total_runs"], 10);
//     econ[deliveries[ob]["bowler"]] /= overs(deliveries[ob]["bowler"]);
//   }
// }


console.log("Question 1");
console.log(matches); // 1
console.log("===========================================================================================");
console.log("Question 2");
console.log(winners); // 2
console.log("===========================================================================================");
console.log("Question 3");
console.log(extraRuns); // 3
// console.log("===========================================================================================");
// console.log("Question 4");
// console.log(econ); 4