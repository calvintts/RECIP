import React from "react";
import {TouchableOpacity, Text} from "react-native";
import styles from '../designs/stylings';

export default class StartButton extends React.Component {
    render() {
        const {
            title,
            onPress,
            disabled,
        } = this.props;
        return (
            <TouchableOpacity disabled={disabled} style={disabled?styles.disableButton:styles.button} onPress={onPress}>
                <Text style={{textAlign: 'center', color: 'white', fontSize: 15,}}>{title}</Text>
            </TouchableOpacity>
        )
    };
}