import React from "react";
import styles from '../designs/stylings';
import {View, Text, ScrollView} from "react-native";
import {Ingredients} from "../components/HeadComponents";

export default class IngredientsSelection extends React.Component {
    render(){
        return(
            <View>
                <ScrollView>
                    <Ingredients name="broccoli"/>
                    <Ingredients name="lettuce"/>
                    <Ingredients name="cucumber"/>
                    <Ingredients name="tomato"/>
                    <Ingredients name="garlic"/>
                    <Ingredients name="onion"/>
                    <Ingredients name="lemon"/>
                    <Ingredients name="lime"/>
                    <Ingredients name="basil"/>
                </ScrollView>
            </View>
        )
    }
}