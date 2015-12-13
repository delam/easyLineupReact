'use strict';

var React = require('react-native');
var GameView = require('./GameView');
var {
    StyleSheet,
    Image,
    View,
    TouchableHighlight,
    ListView,
    Text,
    Component,
    TouchableHighlight,
    } = React;

var styles = StyleSheet.create({
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  title: {
    fontSize: 20,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  }
});

class GameList extends Component {

  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource(
        {rowHasChanged: (r1, r2) => r1.guid !== r2.guid});
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.games)
    };
  }

  rowPressed(idx) {
    this.props.navigator.push({
      title: "Game",
      component: GameView,
      passProps: {game: this.props.games[idx]}
    });
  }

  renderRow(rowData, sectionID, rowID) {
    return (
        <TouchableHighlight onPress={() => this.rowPressed(rowData.id)}
            underlayColor='#dddddd'>
          <View>
            <View style={styles.rowContainer}>
              <View  style={styles.textContainer}>
                <Text style={styles.title}
                    numberOfLines={1}>{rowData.name}</Text>
              </View>
            </View>
            <View style={styles.separator}/>
          </View>
        </TouchableHighlight>
    );
  }

  render() {
    return (
        <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow.bind(this)}/>
    );
  }
}


module.exports = GameList;