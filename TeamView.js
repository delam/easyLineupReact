'use strict';

var React = require('react-native');
var GameList = require('./GameList');
var DB = require('./db.js');
var {
    StyleSheet,
    Image,
    View,
    Text,
    Component,
    TouchableHighlight
    } = React;

var styles = StyleSheet.create({
  container: {
    marginTop: 65
  },
  heading: {
    backgroundColor: '#F8F8F8',
  },
  separator: {
    height: 1,
    backgroundColor: '#DDDDDD'
  },
  image: {
    width: 400,
    height: 300
  },
  title: {
    fontSize: 20,
    margin: 5,
    color: '#656565'
  },
  description: {
    fontSize: 18,
    margin: 5,
    color: '#656565'
  },
  deleteButtonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },  
  deleteButton: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FF0000',
    borderColor: '#FF00000',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

class TeamView extends Component {

  onGamesPressed() {
    this.setState({ isLoading: false });
    this.props.navigator.push({
      title: 'Games',
      component: GameList,
      passProps: {games: this.props.team.games}
    });
  }

  deleteTeam(idx) {
    DB.teams.remove_id(idx, function(team){
      console.log("Removed Team", team);
      // This redirect not working
      this.props.navigator.push({
        title: 'Teams',
        component: Teams,
        passProps: {teams: []}
      });
    });
  }

  render() {
    var team = this.props.team;

    return (
        <View style={styles.container}>
          <View style={styles.heading}>
            <Text style={styles.title}>{team.name}</Text>
            <View style={styles.separator}/>
          </View>
          <Text style={styles.description}>{team.quarters}</Text>
          <TouchableHighlight style={styles.button}
              underlayColor='#99d9f4'
              onPress={this.onGamesPressed.bind(this)}>
            <Text style={styles.buttonText}>Games</Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.deleteButton}
              onPress={this.deleteTeam.bind(this, team._id)}>
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableHighlight>
        </View>
    );
  }
};

module.exports = TeamView;