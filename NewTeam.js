'use strict';

var React = require('react-native');
var MK = require('react-native-material-kit');
var DB = require('./db.js');
var Teams = require('./TeamList');

var {
    StyleSheet,
    View,
    Text,
    Component,
    TouchableHighlight
    } = React;

var {
    MKTextField,
    MKButton,
    MKColor,
    } = MK;

MK.setTheme({
   primaryColor: MKColor.Blue,
   accentColor: MKColor.LightBlue,
});
var styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  textField: {
    width: 300,
    height: 30,
    marginBottom: 10
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
  }
});

const Textfield = MKTextField.textfield()
  .withStyle(styles.textField)
  .build();

class NewTeam extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
    this.form = {
      name: ''
    };
  }

  createTeam() {
    DB.teams.add(this.form, function(team){
      console.log("Team Added", team);
      // DB.teams.get_all(function(teams) {
      //   console.log("All Teams", teams)
      this.props.navigator.push({
        title: 'Teams',
        component: Teams,
        passProps: {teams: teams.rows}
      });
      // });
    })
  }

  setField(field, text) {
    this.form[field] = text;
  }

  render() {
    return (
      <View style={styles.container}>
        <Textfield
          onChangeText={(text) => this.setField('name', text)}
          placeholder="Team Name"/>

        <TouchableHighlight style={styles.button}
            underlayColor='#99d9f4'
            onPress={this.createTeam.bind(this)}>
          <Text style={styles.buttonText}>Add Team</Text>
        </TouchableHighlight>
      </View>
    );    
  }
}

module.exports = NewTeam;