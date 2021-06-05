printjson(db.people.aggregate(
{$group: {_id: "$nationality",
minimalBMI: {$min: {$divide: [{$convert: {input: "$weight", to: "double"}}, {$pow: [{$divide:[{$convert: {input: "$height", to: "double" }},100]},2]}]}},
averageBMI: {$avg: {$divide: [{$convert: {input: "$weight", to: "double"}}, {$pow: [{$divide:[{$convert: {input: "$height", to: "double" }},100]},2]}]}},
maximalBMI: {$max: {$divide: [{$convert: {input: "$weight", to: "double"}}, {$pow: [{$divide:[{$convert: {input: "$height", to: "double" }},100]},2]}]}},}}))