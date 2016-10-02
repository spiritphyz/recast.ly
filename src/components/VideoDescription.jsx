// VideoDescription.jsx
class VideoDescription extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // change description in App.js parent
    var currVideoID = this.props.video.id.videoId;
    var currVideoID = this.props.video;
    // console.log('currVideoID: ', currVideoID);;
  }

  render() {
    return (
      <div>
        <div className="video-player-details">{this.props.fullDescription}</div> 
      </div>
    );
  }
}  

// Export ES6 module so other JS files can see this function
window.VideoDescription = VideoDescription;
