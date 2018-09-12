import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import Slides from '../components/Slides';

const SLIDE_DATA = [
    { text: 'Welcome to JobFinder', color: '#70e5f9'},
    { text: 'Use JobFinder to get a job', color: '#009688'},
    { text: 'Set your location, then swipe away', color: '#215ab7' }
]


class WelcomeScreen extends Component {

    state = { token: null }

    async componentWillMount() {
      let token = await AsyncStorage.getItem('fb_token');
    //   AsyncStorage.removeItem('fb_token');

      if(token) {
          this.props.navigation.navigate('map');
          this.setState({ token }) 
      }else{
          this.setState({ token: false });
      }
    }

    onSlidesComplete = () => {
        this.props.navigation.navigate('auth');
    }
    render() {
        if(this.state.token){

            return <AppLoading/> 
            
            }
        return (
            <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
        );
    }
}

export default WelcomeScreen;