import React from "react";
import {Text, TextInput} from "react-native";
import Button, {Container, Form, FormText, LinkMessage} from "../components/HeadComponents"
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

    verifyPassword = () => {
        if(this.state.password === this.state.repassword) {
            this.setState({
                passwordError: false,
            }, this.verifySend)
        } else {
            this.setState({
                passwordError: true,
            }, this.verifySend)
        }
    }

    verifyFirstName = () => {
        if(!this.checkNames(this.state.fname)) {
            this.setState({
                fnameError: false,
            }, this.verifySend)
        } else {
            this.setState({
                fnameError: true,
            }, this.verifySend)
        }
    }

    verifyLastName = () => {
        if(!this.checkNames(this.state.lname)) {
            this.setState({
                lnameError: false,
            }, this.verifySend)
        } else {
            this.setState({
                lnameError: true,
            }, this.verifySend)
        }
    }

    verifySend = () => {
        if(this.state.email !== '' && this.state.password !== ''
            && this.state.repassword !== '' && this.state.lname !== ''
            && this.state.fname !== '' && !this.state.fnameError
            && !this.state.lnameError && !this.state.passwordError) {
            this.setState({
                allowSend: true,
            })
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
            <Container>
                <Form>
                    <Text style={styles.textLabel}>Email:</Text>
                    <TextInput style={styles.formInput}
                               onChangeText={(email) => this.setState({email}, this.verifySend)}
                               value={this.state.email}
                               underlineColorAndroid={'transparent'}/>
                    <FormText title="Password:" flag={this.state.passwordError} errorTitle="Passwords do not match" />
                    <TextInput style={styles.formInput}
                               onChangeText={(password) => this.setState({password}, this.verifyPassword)}
                               value={this.state.password}
                               secureTextEntry={true}
                               underlineColorAndroid={'transparent'}/>
                    <FormText title="Confirm Password:" flag={this.state.passwordError} errorTitle="Passwords do not match" />
                    <TextInput style={styles.formInput}
                               onChangeText={(repassword) => this.setState({repassword}, this.verifyPassword)}
                               value={this.state.repassword}
                               secureTextEntry={true}
                               underlineColorAndroid={'transparent'}/>
                    <FormText title="First Name:" flag={this.state.fnameError} errorTitle="Undefined characters in name" />
                    <TextInput style={styles.formInput}
                               onChangeText={(fname) => this.setState({fname}, this.verifyFirstName)}
                               value={this.state.fname}
                               underlineColorAndroid={'transparent'}/>
                    <FormText title="Last Name:" flag={this.state.lnameError} errorTitle="Undefined characters in name" />
                    <TextInput style={styles.formInput}
                               onChangeText={(lname) => this.setState({lname}, this.verifyLastName)}
                               value={this.state.lname}
                               underlineColorAndroid={'transparent'}/>
                    <Button disabled={!this.state.allowSend} title="Sign up" onPress={this.serverRegister}/>
                    <LinkMessage message='Already a member? ' link='Sign in Here' onPress={this.signInPage}/>
                </Form>
            </Container>
        );
    }
}
