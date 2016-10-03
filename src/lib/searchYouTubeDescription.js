var searchYouTubeDescription = (options, callback) => {
  var url = 'https://www.googleapis.com/youtube/v3/videos';
  // console.log('vidId:', options.vidId);

  $.ajax({
    url: url,
    type: 'GET',
    data: {
      part: 'id,snippet',
      id: options.vidId.id.videoId,
      key: window.YOUTUBE_API_KEY
    },
    // dataType: 'jsonp',
    success: function(data) {
      //console.log('successful fetch from server: ', data);
      callback(data.items[0].snippet.description);
    },
    error: function(data) {
      console.error('failed to send ajax request', data);
    }
  });

};

window.searchYouTubeDescription = searchYouTubeDescription;
