import Expo from 'expo';
import React from 'react';
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
      Welcome: WelcomeScreen,
      Auth: AuthScreen,
      Main: createBottomTabNavigator({
        Map: MapScreen,
        Deck: DeckScreen,
        Review: createStackNavigator({
          Review: ReviewScreen,
          Settings: SettingsScreen
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
