import React from "react"
import {Alert} from "../components/HeadComponents"
import Expo from "expo"
import {StyleSheet, Text, TouchableOpacity} from "react-native";

export default class GoogloginButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {signedIn: false, name: "", photoUrl: ""}
    }

    _signIn = async () => {
        try {
            const {type, token} = await Expo.Facebook.logInWithReadPermissionsAsync('273609693274100', {
                permissions: ['public_profile', 'email', 'user_friends'],
            });
            if (type === 'success') {
                // Get the user's name using Facebook's Graph API
                const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
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
            <TouchableOpacity  style={styles.button} onPress={this._signIn}>
                <Text style={styles.text}>Sign in with Facebook</Text>
            </TouchableOpacity>
        )
    }
}

styles = StyleSheet.create({
    button: {
        marginTop: 5,
        height: 45,
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#3B5998',
        backgroundColor: '#3B5998',
    },

    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 17,
    }
});