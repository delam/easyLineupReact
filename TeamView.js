'use strict';

var React = require('react-native');
var GameList = require('./GameList');
var {
    StyleSheet,
    Image,
    View,
    Text,
    Component,
    TouchableHighlight,
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

  render() {
    var team = this.props.team;

    return (
        <View style={styles.container}>
          <View style={styles.heading}>
            <Text style={styles.title}>{team.name} dfsdsf</Text>
            <View style={styles.separator}/>
          </View>
          <Text style={styles.description}>{team.quarters}</Text>
          <TouchableHighlight style={styles.button}
              underlayColor='#99d9f4'
              onPress={this.onGamesPressed.bind(this)}>
            <Text style={styles.buttonText}>Games</Text>
          </TouchableHighlight>
        </View>
    );
  }
};

module.exports = TeamView;