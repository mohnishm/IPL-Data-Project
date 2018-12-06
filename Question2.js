let iplDataSet = require('./matchdata.json');
let deliveries = require('./deliveries.json');

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

  console.log(winners);