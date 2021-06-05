var mapFunkcja3 = function() {
emit('occupation', this.job);}

var redFun3 = function(job, values){
var occupations = new Set();
for( i = 0; i < values.length; i++){
occupations.add(values[i]);}
var occupationsArray = [];
occupations.forEach(job => { occupationsArray.push(job)});
return occupationsArray;}

db.people.mapReduce(
mapFunkcja3,
redFun3,
{out: "Wynik3"})

printjson(db.Wynik3.find().toArray())