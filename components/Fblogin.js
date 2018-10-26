import React from "react"
import {Alert, Button } from "react-native"
import Expo from "expo"

export default class GoogloginButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {signedIn: false, name: "", photoUrl: ""}
    }

    _signIn = async () => {
        try {
            const {type, token} = await Expo.Facebook.logInWithReadPermissionsAsync('273609693274100', {
                permissions: ['public_profile'],
            });
            if (type === 'success') {
                // Get the user's name using Facebook's Graph API
                const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
                console.log(await response.json());
                Alert.alert(
                    'Logged in!',
                    `Hi ${(await response.json()).name}!`,
                );
            }else{
                Alert.alert('Facebook Login canceled');
            }
        } catch (e) {
            console.log("error", e)
        }
    };
    render() {
        return (
            <Button title='Sign in to Facebook' onPress={this._signIn}  />
        )
    }
}