import React from "react";
import {AsyncStorage, View} from "react-native";
import Menu from '../components/IngredientsMenu';


export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };
    render() {
        return (
            <View>
                <Menu />
            </View>
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