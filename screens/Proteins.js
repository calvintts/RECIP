import React from "react";
import styles from '../designs/stylings';
import {Ingredients, IngredientsHandIn} from '../components/HeadComponents'
import {View, Text, ScrollView} from "react-native";

export default class IngredientsSelection extends React.Component {
    static navigationOptions = {
        title:"Protein"
    };
    render(){
        return(
            <View>
                <ScrollView>
                    <Ingredients name="chicken"/>
                    <Ingredients name="fish"/>
                    <Ingredients name="pork"/>
                </ScrollView>
                <IngredientsHandIn/>
            </View>
        )
    }
}