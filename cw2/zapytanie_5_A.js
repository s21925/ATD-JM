printjson(db.people.aggregate(
{$unwind: "$credit"},
{$match: { "nationality": "Poland", "sex": "Female" }},
{$group: { _id: "$nationality", 
totalCredits: { $sum: {$convert: {input: "$credid.balance", to: "double" }}},
avgCredits: { $avg: {$convert: {input: "$credid.balance", to: "double" }}},}}))