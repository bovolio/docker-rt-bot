console.log("The spam is about to begin...");


//setting variables
var Twitter = require('twitter');
var config  = require('./config');
var client = new Twitter(config);



//var keyword is what word/phrase to search for
var keyword = "your keyword/keyphrase";
var searchKeyword = {
    track: keyword
};

var stream = client.stream('statuses/filter', searchKeyword);
stream.on('data', function(event) {
    var victim = event.user.screen_name;
    var tweetId = event.id_str;
client.post('statuses/retweet/' + tweetId, function(error, tweet, response) {
  if (!error) {
    console.log("######TWEET HAS BEEN SUCCESSFULLY RETWEETED!######");
  }
  else {
      console.log("^^^^^^^Your spam retweet^^^^^^^");
  }
});
console.log( "@" + victim , event && event.text);
});