printjson(db.people.aggregate(
   [
     {
       $group:
         {
           _id: "$sex",
           avgHeight: {$avg: { $convert: { 'input': "$height", 'to': "double"}}},
           avgWeight: {$avg: { $convert: { 'input': "$weight", 'to': "double"}}}
         }
     }
   ]
))