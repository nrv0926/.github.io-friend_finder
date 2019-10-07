//data

var userInfo = require("../data/friends");


// routing
module.exports = function (app) {
    // ---------------------------------------------------------------------------

    app.get("/api/friends", function (req, res) {
        res.json(userInfo);
    });

    // post

    app.post("/api/friends", function (req, res) {
        var diffHolder = 50;
        var friend;

        userInfo.push(req.body);
        var user = userInfo[(userInfo.length - 1)];

        for (var i = 0; i < userInfo.length - 1; i++) {
            var diff = 0;
            var compatableFriend = userInfo[i];

            for (var j = 0; j < compatableFriend.scores.length; j++) {
                diff += (Math.abs(compatableFriend.scores[j] - user.scores[j]));
            }
            if (diffHolder > diff) {
                diffHolder = diff;
                friend = compatableFriend;
            }
        }
        res.json(friend);
    });


};