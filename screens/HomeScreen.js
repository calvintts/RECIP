import React from "react";
import {AsyncStorage, Button, View} from "react-native";

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View>
                <Button title="Select Ingredients Yo" onPress={this.toIngredientMenu} />
                <Button title="I'm done, sign me out" onPress={this._signOutAsync} />
            </View>
        );
    }

    toIngredientMenu = () => {
       this.props.navigation.navigate('Food');
    };

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
};

