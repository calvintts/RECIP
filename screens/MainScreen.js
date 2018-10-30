import React from "react";
import {View, Image, TouchableOpacity, Text} from "react-native";
import Logo from '../images/logo2.png';
import styles from '../designs/stylings';
import StartButton from "../components/HeadComponents.js";

 export default class MainScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={Logo} style={styles.logo}>
                </Image>
                <View style={styles.buttonMainWrap}>
                    <StartButton onPress={this.signInPage} title='Sign In'/>
                    <StartButton onPress={this.signUpPage} title='Sign Up'/>
                </View>
            </View>
        );
    }

    signUpPage =  () => {
        this.props.navigation.navigate('SignUp');
    };
    signInPage =  () => {
        this.props.navigation.navigate('Login');
    };
}
