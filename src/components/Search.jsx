var Search = (props) => (
  <div className="search-bar form-inline">
    <input onChange={() => {props.search({query: document.getElementsByClassName('form-control')[0].value}, props.cb)}} className="form-control" type="text" />
    <button onClick={() => { props.search({query: document.getElementsByClassName('form-control')[0].value}, props.cb); } } className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
