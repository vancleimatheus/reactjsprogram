var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var cont = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      isLoading: true,
      playersInfo: []
    }
  },
  componentWillMount: function () {
    console.log('componentWillMount');
  },
  componentDidMount: function() {
    var query = this.props.location.query;

    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then(function (players) {
        this.setState({
          isLoading: false,
          playersInfo: [players[0], players[1]]
        })
      }.bind(this));
    
  },
  handleInitiateBattle: function (){
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    })
  },
  componentWillReceiveProps: function() {
    console.log('componentWillReceiveProps');
  },
  componentWillUnmount: function() {
    console.log('componentWillUnmount');
  },
  render: function () {
    return (
      <ConfirmBattle 
        isLoading={this.state.isLoading}
        onInitiateBattle={this.handleInitiateBattle}
        playersInfo={this.state.playersInfo} />
    );
  }
});

module.exports = cont;


