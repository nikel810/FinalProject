var Article = React.createClass({

  render: function(){

    return(
      <div>
        <div className="">
          {this.props.title}
        </div>
        <div className="">
          {this.props.description}
        </div>
      </div>
  );
  }
});



//
// <Article title="my_article" description ="my_description"/>
// RUBY
// <%= react_component('HelloMessage', name: 'John') %>
