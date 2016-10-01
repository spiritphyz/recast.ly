class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: props.video,
      allVideos: window.exampleVideoData
    };

  }

  componentDidMount() {
    console.log('component did mount');
    this.props.search({query: ''}, (data) => { this.setState({allVideos: data.items}); } );  
  }
 
  changeAllVideos(allVideos) {
    this.setState({
      allVideos: allVideos.items
    });
  }

  changeAppState(event, video) {
    //console.log(video);
    this.setState({
      currentVideo: video
    }); 
  }

  render() {
    console.log('irendered');
    return ( <div>
      <Nav cb={this.changeAllVideos.bind(this)} search={this.props.search}/>
      <div className="col-md-7">
        <VideoPlayer video={this.state.currentVideo}/>
      </div>
      <div className="col-md-5">
        <VideoList videos={this.state.allVideos} cb={this.changeAppState.bind(this)}/>
      </div>
    </div> );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
