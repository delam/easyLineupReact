/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Welcome = require('./Welcome');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} = React;

var easyLineupReact = React.createClass({
  render: function() {
    return (
        <NavigatorIOS
            style={styles.container}
            initialRoute={{
              title: 'Easy Lineup',
              component: Welcome,
            }}/>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('easyLineupReact', () => easyLineupReact);
