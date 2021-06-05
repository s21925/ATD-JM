printjson(db.people.aggregate(
{$unwind: {path: "$credit"}}, 
{$unwind: {path: "$credit.currency"}}, 
{$unwind: {path: "$credit.balance"}}, 
{$group: {_id: "$credit.currency",balance: {$sum: {$toDouble: "$credit.balance"}}}}))