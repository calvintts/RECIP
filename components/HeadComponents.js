import React from "react";
import {TouchableOpacity, Text, KeyboardAvoidingView, View, Switch, AsyncStorage,Image} from "react-native";
import styles from '../designs/stylings';

export default class Button extends React.Component {
    render() {
        const {
            title,
            onPress,
            disabled,
        } = this.props;
        return (
            <TouchableOpacity disabled={disabled} style={disabled?styles.disableButton:styles.button} onPress={onPress}>
                <Text style={{textAlign: 'center', color: 'white', fontSize: 17,}}>{title}</Text>
            </TouchableOpacity>
        )
    };
};

export class FormText extends React.Component {
    render() {
        const {
            title,
            flag,
            errorTitle,
        } = this.props;
        return (
            <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                    <Text style={styles.textLabel}>{ title }</Text>
                </View>
                {
                    flag &&
                    <View style={styles.errorView}>
                        <Text style={styles.errorMessage}>{ errorTitle }</Text>
                    </View>
                }
            </View>
        )
    }
}

export class LinkMessage extends React.Component {
    render() {
        const {
            message,
            link,
            onPress,
        } = this.props;
        return (
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={{fontSize: 15}}>{ message }</Text>
                <TouchableOpacity onPress={ onPress }>
                    <Text style={{color: 'rgb(180, 50, 50)', fontSize: 15}}>{ link }</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export class Ingredients extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selected: false
        }
    };

    updateStorage = async(selected, name) => {
        this.setState({ selected: !selected});
        const status = (!selected)? '1':'0';
        try {
            await AsyncStorage.setItem(name.toString(), status);
        } catch (error) {
            console.log(error.message);
        }
    };

    render(){
        const { name } = this.props;
        return(
            <View style={styles.ingredientsView}>
                <View style={{flexDirection:"row"}}>
                    <Image style={{width:150, height:150}} source={require(`../images/ingredients/garlic.png`)}/>
                    <Text style=/*{styles.ingredientsText}*/{{alignSelf: 'center'}}>{ name }</Text>
                </View>
                <Switch style={styles.ingredientsSwitch} value={this.state.selected} onValueChange={() => this.updateStorage(this.state.selected, { name })}/>
            </View>
        );
    }
}

export const Container = (props) => {
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            {props.children}
        </KeyboardAvoidingView>
    )
};

export const Form = (props) =>{
    return (
        <View style={styles.form}>
            {props.children}
        </View>
    )
};

