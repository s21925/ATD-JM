var mapFunkcja4 = function() {
emit(this.nationality, { height: parseFloat(this.height), weight: parseFloat(this.weight) });}

var redFun4 = function(nationality, values) {
value = { minimumbmi: 0, maximumbmi: 0, averagebmi: 0 };
var minimum = (values[0].weight / Math.pow(values[0].height / 100, 2));
var maximum = minimum;
var sumofbmi = 0;
for (i = 1; i < values.length; ++i){
var tempbmi = (values[i].weight / Math.pow(values[i].height / 100, 2));
sumofbmi += tempbmi;
if (tempbmi < minimum) minimum = tempbmi;
if (tempbmi > maximum) maximum = tempbmi;}
value.minimumbmi = minimum;
value.maximumbmi = maximum;
value.averagebmi = (sumofbmi / values.length);
return value;}

db.people.mapReduce(
mapFunkcja4,
redFun4,{
out: "Wynik4",})

printjson(db.Wynik4.find().toArray())