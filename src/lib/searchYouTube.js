var searchYouTube = (options, callback) => {
  var url = 'https://www.googleapis.com/youtube/v3/search';
  options.query = options.query || 'sasha rose liberation movement';

  $.ajax({
    url: url,
    type: 'GET',
    data: {part: 'id,snippet',
           q: options.query,
           id: options.vidId,
           maxResults: 5,
           type: 'video',
           key: window.YOUTUBE_API_KEY,
           videoEmbeddable: true,
    },
    dataType: 'jsonp',
    success: function(data) {
      //console.log('successful fetch from server: ', data);
      callback(data);
    },
    error: function(data) {
      console.error('failed to send ajax request', data);
    }
  });

};

window.searchYouTube = searchYouTube;
