subreddit = 'javascript'

function getSubreddits(subreddit){
  var promise = $.ajax({
    url: 'https://www.reddit.com/r/' + subreddit +'.json',
    type: 'get',
  });

return promise;
}

getSubreddits(subreddit).then(function(response) {

    var templateSource = $('#subreddit-list-template').html();
    var template = Handlebars.compile(templateSource);
    var html = template({
        subredditResults:response.data.children.data
    });

    $('#subreddit-list').html(html);
  }, function(){
    console.log('there was an error');
});
