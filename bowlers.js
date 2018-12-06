let bowlers = require('./deliveries.json');

var bowlerList = [];

for (var obj in bowlers){
    if(!(bowlers[obj]["bowler"] in bowlerList)) {
        bowlerList.push(bowlers[obj]["bowler"]);
    }
}
bowlerList = bowlerList.filter((v,i) => bowlerList.indexOf(v) === i)

let econ = {};
for (var bowl in bowlerList){
    var totRuns = 0;
    for (var obj in bowlers){
        if(bowlers[obj]["bowler"] == bowlerList[bowl]){
            totRuns += parseInt(bowlers[obj]["total_runs"], 10);
        }
    }
    econ[bowlerList[bowl]] = totRuns;
}

console.log(econ);