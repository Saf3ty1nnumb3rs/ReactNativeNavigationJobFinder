import React, { Component } from 'react';
import { View, 
         Text, 
         ScrollView, 
         StyleSheet, 
         Dimensions
        } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
    renderLastSlide = (index) => {
        if(index === this.props.data.length -1) {
            return (
                <Button
                title="Onwards!"
                onPress={this.props.onComplete}
                buttonStyle={styles.buttonStyle}
                textStyle={styles.buttonText}
                raised
                />
            )
        };
    };

    renderSlides() {
        return this.props.data.map( (slide, i) => {
            return (
                <View 
                key={slide.text}
                style={[styles.slideStyle,{ backgroundColor: slide.color}]}>
                    <Text style={styles.textStyle}>{slide.text}</Text>
                    {this.renderLastSlide(i)}
                </View>

            );
        });
    }

    render() {
        return (
            <ScrollView
             horizontal
             pagingEnabled
             style={{ flex: 1 }}
            >
              {this.renderSlides()}  
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    slideStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH
    },
    textStyle: {
        fontSize: 30,
        color: '#fff',
        textAlign: 'center'
    },
    buttonStyle: {
        backgroundColor: '#01d13f',
        marginTop: 15,
        borderRadius: 10
    },
    buttonText: {
        color: '#fff'
    }
});

export default Slides;