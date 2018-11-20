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
                    <Ingredients name="chicken" imagesrc={require("../images/ingredients/chicken.png")}/>
                    <Ingredients name="fish" imagesrc={require("../images/ingredients/fish.png")}/>
                    <Ingredients name="pork" imagesrc={require("../images/ingredients/pork.png")}/>
                </ScrollView>
                <IngredientsHandIn/>
            </View>
        )
    }
}