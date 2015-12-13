'use strict';

var React = require('react-native');
var {
    StyleSheet,
    Image,
    View,
    Text,
    Component
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

class GameView extends Component {

  render() {
    var game = this.props.game;

    return (
        <View style={styles.container}>
          <View style={styles.heading}>
            <Text style={styles.title}>{game.name}</Text>
            <View style={styles.separator}/>
          </View>
        </View>
    );
  }
};

module.exports = GameView;