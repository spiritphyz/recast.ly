// TODO: Render the `App` component to the DOM
var throttledSearch = _.throttle(searchYouTube, 500);
ReactDOM.render(<App video={exampleVideoData[0]} search={throttledSearch} descriptionSearch={searchYouTubeDescription}/>, document.getElementById('app'));
