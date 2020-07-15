import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Alert} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import Loading from "./Loading";
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from "./Weather";

const API_KEY = "e18cdf402a7774da9159a71a3b8be1cd";

export default class extends React.Component {
    state = {
        isLoading: true,
    }
    getWeather = async (lat, lon) => {
        const {
            data: {
                main: {temp},
                weather
            },
        } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        this.setState({isLoading: false, condition: weather[0].main, temp})
    }

    getLocation = async () => {
        try {
            await Location.requestPermissionsAsync();
            const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
            this.getWeather(latitude, longitude);
        } catch (error) {
            Alert.alert("Can't find you.", "So sad");
        }

    }

    componentDidMount() {
        this.getLocation()
    }

    render() {
        const {isLoading, condition, temp} = this.state;
        return isLoading ? <Loading/> : <Weather temp={Math.round(temp)} condition={condition}/>;
    }
}

