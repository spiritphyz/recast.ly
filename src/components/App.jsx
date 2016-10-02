class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: props.video,
      fullDescription: '',
      allVideos: window.exampleVideoData
    };

  }
  
  
  componentDidMount() {
    this.props.search({query: ''}, (data) => { this.setState({allVideos: data.items, currentVideo: data.items[0]}); } );
    this.props.descriptionSearch({vidId: this.state.currentVideo}, (data) => { this.changeFullDescription(data); });
  }

  changeFullDescription(vidSearchResult) {
      //console.log('video search results:', vidSearchResult);
    this.setState({
      fullDescription: vidSearchResult
    });
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
    this.props.descriptionSearch({vidId: this.state.currentVideo}, (data) => {this.changeFullDescription(data);}) ;
  }

  render() {
    return ( <div>
      <Nav cb={this.changeAllVideos.bind(this)} search={this.props.search}/>
      <div className="col-md-7">
        <VideoPlayer video={this.state.currentVideo}/>
        <VideoDescription video={this.state.currentVideo} fullDescription={this.state.fullDescription} search={this.props.search} />
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
