import React from "react";
import {Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity} from "react-native";
import StartButton from "./UtilityRNComponents.js"
import styles from '../designs/stylings';

export default class SignUpScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            fname: '',
            lname: '',
            repassword: '',
            allowSend: false,
            fnameError: false,
            lnameError: false,
            passwordError: false,
        };
    }

    checkNames = (name) => {
        let hasNumber = /\d/;
        return (hasNumber.test(name))
    };

    verifySend = () => {
        if(this.state.email !== '' && this.state.password !== ''
        && this.state.repassword !== '' && this.state.lname !== ''
        && this.state.fname !== '') {
            if(!this.checkNames(this.state.fname) && !this.checkNames(this.state.lname) && this.state.repassword === this.state.password) {
                this.setState({
                    allowSend: true,
                })
            } else {
                this.setState({
                    allowSend: false,
                })
            }
        } else {
            this.setState({
                allowSend: false,
            })
        }
    };

    signInPage =  () => {
        this.props.navigation.navigate('Login');
    };

    serverRegister = async () => {
        await fetch('https://recipefinder2018.herokuapp.com/users/register',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email.toLowerCase(),
                password: this.state.password,
                firstname: this.state.fname,
                lastname: this.state.lname,
            })
        })
            .then(response => response.json())
            .then(json => alert(json.message));
        if (json => json.result) {
            this.signInPage();
        }
    };

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <View style={styles.form}>
                    <Text style={styles.textLabel}>Username:</Text>
                    <TextInput style={styles.formInput}
                               onChangeText={(email) => this.setState({email}, this.verifySend)}
                               value={this.state.email}/>
                    <Text style={styles.textLabel}>Password:</Text>
                    <TextInput style={styles.formInput}
                               onChangeText={(password) => this.setState({password}, this.verifySend)}
                               value={this.state.password}/>
                    <Text style={styles.textLabel}>Comfirm Password:</Text>
                    <TextInput style={styles.formInput}
                               onChangeText={(repassword) => this.setState({repassword}, this.verifySend)}
                               value={this.state.repassword}/>
                    <Text style={styles.textLabel}>First Name:</Text>
                    <TextInput style={styles.formInput}
                               onChangeText={(fname) => this.setState({fname}, this.verifySend)}
                               value={this.state.fname}/>
                    <Text style={styles.textLabel}>Last Name:</Text>
                    <TextInput style={styles.formInput}
                               onChangeText={(lname) => this.setState({lname}, this.verifySend)}
                               value={this.state.lname}/>
                    <StartButton disabled={!this.state.allowSend} title="Sign up" onPress={this.serverRegister}/>
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <Text style={{fontSize: 15}}>Already have an account? </Text>
                        <TouchableOpacity onPress={this.signInPage}>
                            <Text style={{color: 'rgb(150, 10 , 10)', fontSize: 15}}>Sign in Here</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}
