var mapFunkcja5 = function() {
for (i = 0; i < this.credit.length; i++){
emit({ currency: this.credit[i].currency, nationality: this.nationality, sex: this.sex }, parseFloat(this.credit[i].balance) );}};

var redFun5 = function(currency, values){
value = { calkowityIloscSrodkow: 0, sredniaIloscSrodkow: 0 };
for (i = 0; i < values.length; i++){
value.calkowityIloscSrodkow += values[i];}
value.sredniaIloscSrodkow = (value.calkowityIloscSrodkow / values.length);
return value;};

db.people.mapReduce(
mapFunkcja5,
redFun5,
{query: { nationality: "Poland", sex: "Female" },
out: "Wynik5"})

printjson(db.Wynik5.find().toArray())