import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import PropTypes from 'prop-types';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';

const weatherOptions = {
    Haze: {
        iconName: 'weather-hazy',
        gradient: ['#108dc7', '#ef8e38'],
        title: 'Haze',
        subtitle: `Forward objects are not seen clearly as before.`
    },
    Clouds: {
        iconName: 'weather-cloudy',
        gradient: ['#3E5151', '#DECBA4'],
        title: 'Cloudy',
        subtitle: `Just don't go outside, but it's still okay to go outside.`,
    },
    Clear: {
        iconName: 'weather-sunny',
        gradient: ['#ED8F03', '#FFB75E'],
        title: 'Clear',
        subtitle: `You and I love this weather. Go outside!`
    },
    Thunderstorm: {
        iconName: 'weather-lightning',
        gradient: ['#0f0c29', '#302b63', '#24243e'],
        title: 'Thunderstorm',
        subtitle: `If you think that you can survive from the natural electricity, good luck!`
    },
    Drizzle: {
        iconName: 'weather-partly-rainy',
        gradient: ['#00B4DB', '#0083B0'],
        title: 'Drizzle',
        subtitle: `Raindrops are falling above your head.`
    },
    Rain: {
        iconName: 'weather-pouring',
        gradient: ['#304352', '#d7d2cc'],
        title: 'Rain',
        subtitle: `Big Raindrops are falling above your head.`
    },
    Snow: {
        iconName: 'weather-snowy-heavy',
        gradient: ['#000428', '#004e92'],
        title: 'Snow',
        subtitle: `Merry Christmas!`
    },
    Mist: {
        iconName: 'weather-hazy',
        gradient: ['#BA5370', '#F4E2D8'],
        title: 'Mist',
        subtitle: `Hope this weather be helpful to your face.`
    },
    Dust: {
        iconName: 'weather-tornado',
        gradient: ['#d6ae7b', '#eacda3'],
        title: 'Dust',
        subtitle: `Foking china!`
    },
    fog: {
        iconName: 'weather-fog',
        gradient: ['#636FA4', '#E8CBC0'],
        title: 'Fog',
        subtitle: `Be careful of your front!`
    },
}

export default function Weather({temp, condition}) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <View style={{...styles.halfContainer, ...styles.weatherContainer}}>
                <MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color={`white`}/>
                <Text style={styles.temp}>{temp}℃</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>

    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        'Tunderstorm',
        'Drizzle',
        'Rain',
        'Snow',
        'Clear',
        'Clouds',
        'Haze',
        'Mist',
        'Dust',
        'fog'
    ]).isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    temp: {
        fontSize: 42,
        color: 'white'
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        paddingBottom: 20,
        color: "white",
        fontSize: 60,
        fontWeight: 'normal'
    },
    subtitle: {
        color: "white",
        fontSize: 20,
        fontWeight: '600'
    },
    textContainer: {
        paddingHorizontal: 30,
        alignItems: 'flex-start',
    },
    weatherContainer: {
        paddingTop: 40,
    }
})