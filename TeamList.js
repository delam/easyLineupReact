'use strict';

var React = require('react-native');
var TeamView = require('./TeamView');
var ActionButton = require('react-native-action-button'),
    Icon = require('react-native-vector-icons/Ionicons');
var MK = require('react-native-material-kit');
var {
    StyleSheet,
    Image,
    View,
    TouchableHighlight,
    ListView,
    Text,
    Component
    } = React;

var {
    MKButton,
    MKColor,
    } = MK;

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
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

const AccentColoredFab = MKButton.accentColoredFab()
    .withStyle(styles.fab)
    .withOnPress(() => {
      console.log("Hi, it's a colored button!");
    })
    .build();

MK.setTheme({
  primaryColor: MKColor.Blue,
  accentColor: MKColor.LightBlue,
});

class TeamList extends Component {

  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource(
        {rowHasChanged: (r1, r2) => r1.guid !== r2.guid});
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.teams)
    };
  }

  rowPressed(idx) {
    var team_data = {name: 'Tigers', quarters: 4, games: [{name: 'Game 1', id: 0}, {name: 'Game 2', id: 1}, {name: 'Game 3', id: 2}], players: [{name: 'David', number: '00'}]};

    this.props.navigator.push({
      title: "Team",
      component: TeamView,
      passProps: {team: team_data}
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
      <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
        <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}/>

        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
            <Icon name="android-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
            <Icon name="android-notifications-none" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
            <Icon name="android-done-all" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}


module.exports = TeamList;