import React from "react";
import {AsyncStorage} from "react-native";
import Menu from '../components/IngredientsSelection';

export default class HomeScreen extends React.Component {

    render() {
        return (
            <Menu />
        );
    }

    _showMoreApp = () => {
        this.props.navigation.navigate('Other');
    };

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
};