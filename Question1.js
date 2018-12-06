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

console.log(matches);