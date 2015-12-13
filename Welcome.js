'use strict';

var React = require('react-native');
var MK = require('react-native-material-kit');
var DB = require('./db.js');
var Teams = require('./TeamList');
var {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableHighlight,
    ActivityIndicatorIOS,
    Image,
    Component
    } = React;

var {
    MKButton,
    MKColor,
    } = MK;

MK.setTheme({
   primaryColor: MKColor.Blue,
   accentColor: MKColor.LightBlue,
});

var styles = StyleSheet.create({
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  fab: {
  // width: 200,
  // height: 200,
  // borderRadius: 100,
  },
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  },
  image: {
    width: 217,
    height: 138
  }
});

const AccentColoredFab = MKButton.accentColoredFab()
    .withStyle(styles.fab)
    .build();

class Welcome extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  onSearchPressed() {
    this.setState({ isLoading: true, message: '' });
    var teams_mock = [
      {name: 'tigers', id: 0},
      {name: 'bears', id: 1},
    ];
    var ref = this;
    DB.teams.get_all(function(result){
      console.log(result);
      ref.setState({ isLoading: false });
      ref.props.navigator.push({
        title: 'Teams',
        component: Teams,
        passProps: {teams: result.rows}
      });
    })
  }

  render() {
    var spinner = this.state.isLoading ?
        ( <ActivityIndicatorIOS
            hidden='true'
            size='large'/> ) :
        ( <View/>);

    return (
        <View style={styles.container}>
          <Text style={styles.description}>
            Get Started
          </Text>
          <View style={styles.flowRight}>
            <TouchableHighlight style={styles.button}
                underlayColor='#99d9f4'
                onPress={this.onSearchPressed.bind(this)}>
              <Text style={styles.buttonText}>Go</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.col}>
            <AccentColoredFab>
              <Image pointerEvents="none" source={require('image!plus_white')} />
            </AccentColoredFab>
          </View>
        </View>
    );
  }
}

module.exports = Welcome;