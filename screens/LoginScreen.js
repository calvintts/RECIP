import React from "react";
import {Text, TextInput, Image, View, StyleSheet, Platform} from "react-native";
import styles from '../designs/stylings';
import Button, {Container, Form, LinkMessage} from '../components/HeadComponents';
import Logo from "../images/logo2.png";
import GoogleLoginButton from '../components/Googlogin'
import FacebookLoginButton from '../components/Fblogin'

export default class SignInScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            allowSend: false,
        };
    }

    verifySend = () => {
        if(this.state.email !== '' && this.state.password !== '') {
            this.setState({
                allowSend: true,
            })
        } else {
            this.setState({
                allowSend: false,
            })
        }
    }

    serverLogin = async () => {
        if (this.state.email.toLowerCase() === 'admin' && this.state.password === 'admin'){
            this.homePage();
        } else {
            await fetch('https://recipefinder2018.herokuapp.com/users/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: this.state.email.toLowerCase(),
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
            <Container>
                <Form>
                    <Image source={Logo} style={styles.logoSmall} />
                    <View style={styles.oauthForm}>
                        <GoogleLoginButton/>
                        <FacebookLoginButton/>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10, marginBottom: 10}}>
                        <View style={{backgroundColor: 'red', height: 2, width: '40%', marginTop: 8}}/>
                        <Text style={{fontSize: 16, paddingHorizontal: 10, alignSelf: 'center',}}>OR</Text>
                        <View style={{backgroundColor: 'red', height: 2, width: '40%', marginTop: 8}}/>
                    </View>
                    <Text style={styles.textLabel}>Username:</Text>
                    <TextInput textContentType="emailAddress" style={styles.formInput}
                               onChangeText={(email) => this.setState({email}, this.verifySend)}
                               value={this.state.email}
                               underlineColorAndroid={'transparent'}/>
                    <Text style={styles.textLabel}>Password:</Text>
                    <TextInput textContentType="password" style={styles.formInput}
                               onChangeText={(password) => this.setState({password}, this.verifySend)}
                               value={this.state.password}
                               secureTextEntry={true}
                               underlineColorAndroid={'transparent'}/>
                    <Button title="Sign In" onPress={this.serverLogin} disabled={!this.state.allowSend}/>
                    <LinkMessage message="New user? " link="Sign Up Here" onPress={this.signUpPage}/>
                 </Form>
            </Container>
        );
    }
}

