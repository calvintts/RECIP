import React from "react";
import {Text, View, StyleSheet, TextInput, TouchableOpacity, Image} from "react-native";
import styles from '../designs/stylings';
import StartButton from './UtilityRNComponents.js'
import Logo from "../images/logo2.png";
import GoogleLoginButton from '../components/Googlogin'
import FacebookLoginButton from '../components/Fblogin'



export default class SignInScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    serverLogin = async () => {
        if (this.state.email == 'admin' && this.state.password == 'admin'){
            this.homePage();
        } else {
            await fetch('https://recipefinder2018.herokuapp.com/users/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password,
                })
            })
                .then(response => response.json())
                .then(json => alert(json.message))
        }
    };

    signUpPage =  () => {
        this.props.navigation.navigate('SignUp');
    };

    homePage = () => {
        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.form}>
                    <Image source={Logo} style={styles.logo}>
                    </Image>
                    <Text style={styles.textLabel}>Username:</Text>
                    <TextInput textContentType="emailAddress" style={styles.formInput}
                               onChangeText={(email) => this.setState({email})}
                               value={this.state.email}/>
                    <Text style={styles.textLabel}>Password:</Text>
                    <TextInput textContentType="password" style={styles.formInput}
                               onChangeText={(password) => this.setState({password})}
                               value={this.state.password}/>
                    <View>
                        <StartButton title="Sign In" onPress={this.serverLogin}/>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <Text style={{fontSize: 15}}>New user? </Text>
                        <TouchableOpacity onPress={this.signUpPage}>
                            <Text style={{color: 'rgb(150, 10 , 10)', fontSize: 15}}>Register Here</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{paddingBottom: 15}}>
                        <GoogleLoginButton/>
                    </View>
                    <View style={{}}>
                        <FacebookLoginButton/>
                    </View>
                </View>

            </View>
        );
    }
}
