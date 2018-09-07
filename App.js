import Expo from 'expo';
import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';
import AuthScreen from './screens/AuthScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingsScreen from './screens/SettingsScreen';


export default class App extends React.Component {
  render() {
    const MainNavigator = createBottomTabNavigator({
      welcome: WelcomeScreen,
      auth: AuthScreen,
      main: createBottomTabNavigator({
        map: MapScreen,
        deck: DeckScreen,
        review: createStackNavigator({
          review: ReviewScreen,
          settings: SettingsScreen
        })
      })
    });


    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
});
