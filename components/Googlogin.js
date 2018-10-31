import React from "react";
import Expo from "expo";
import {StyleSheet, Text, TouchableOpacity} from "react-native";

export default class GoogloginButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {signedIn: false, name: "", photoUrl: ""}
    }
    _signIn = async () => {
        try {
            const result = await Expo.Google.logInAsync({
                androidClientId: '479533681710-o2k2itirsv49jke75jufg7lmvkpppror.apps.googleusercontent.com',
                iosClientId: '479533681710-oh7i4ueeqaifrfmf88qtrdb1qmm3hn09.apps.googleusercontent.com',
                scopes: ["profile", "email"],
            });
            if (result.type === "success") {
                console.log(result.type);
                console.log(result);
                //save token and credentials here with result.user.[email,familyName,givenName,id,name,photoUrl]
                this.setState({
                    signedIn: true,
                    name: result.user.name,
                    photoUrl: result.user.photoUrl
                })
            } else {
                console.log("cancelled")
            }
        } catch (e) {
            console.log("error", e)
        }
    };

    render() {
        return (
            <TouchableOpacity  style={gStyles.button} onPress={this._signIn}>
                <Text style={gStyles.text}>Sign in with Google</Text>
            </TouchableOpacity>
        )
    }
}

gStyles = StyleSheet.create({
    button: {
        marginTop: 5,
        height: 45,
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'orange',
        backgroundColor: 'orange',
    },

    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 17,
    }
});


