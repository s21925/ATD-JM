var mapFunkcja1 = function() {
emit(this.sex, { count: 1, height: parseFloat(this.height), weight: parseFloat(this.weight) });}

var redFunkcja1 = function(sex, values) {
var count = 0;
var wzrost = 0;
var waga = 0;
for (i = 0; i < values.length; i++){
count += values[i].count;
wzrost += values[i].height;
waga += values[i].weight;}
value = {sredniWzrost: 0, sredniWaga: 0};
value.sredniWzrost = (wzrost / count);
value.sredniWaga = (waga / count);
return value;}

db.people.mapReduce(
mapFunkcja1,
redFunkcja1,
{ 
out: "Wynik1",})

printjson(db.Wynik1.find().toArray())