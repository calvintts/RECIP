import React from "react";
import {AsyncStorage, Button, View} from "react-native";
import { Constants } from 'expo';
import SettingPopup  from '../components/UpdateIngredients';


export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header:null
    };
    render() {
        return (
            <View style={{flex:1, flexDirection:"column",justifyContent:"space-around",paddingTop: Constants.statusBarHeight}}>
                <Button title="Select Ingredients Yo" onPress={this.toIngredientMenu} />
                <Button title="I'm done, sign me out" onPress={this._signOutAsync} />
                <Button title="sohai" onPress={()=>{this.props.navigation.navigate('Other')}}/>
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

