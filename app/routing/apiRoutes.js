// LOAD DATA
var friendsData = require("../data/friends");

// ROUTING
module.exports = function(app) {
  // API GET Requests
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST Requests
  app.post("/api/friends", function(req, res) {
      // initialize 
      var dataObj = req.body;
      var match = 100;
      var matchFriend;
      
      // matching process
      for(i = 0; i < friendsData.length; i++){
        var diff = 0;
        for(j = 0; j < dataObj.scores.length; j++){
          diff += Math.abs(parseInt(dataObj.scores[j])-parseInt(friendsData[i].scores[j]));
        }
        // if lower than previous match, replace the points and person
        if(diff < match){
          match = diff;
          matchFriend = friendsData[i];
        }
      }

      // push the dataObj to friendsData
      friendsData.push(dataObj);
      res.json(matchFriend);
  });

  // CLEAR API
  // app.post("/api/clear", function() {
  //   // Empty out the arrays of data
  //   friendsData = [];
  //   console.log(tableData);
  // });
};