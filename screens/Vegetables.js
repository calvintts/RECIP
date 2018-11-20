import React from "react";
import styles from '../designs/stylings';
import {View, ScrollView} from "react-native";
import {Ingredients, IngredientsHandIn} from "../components/HeadComponents";

export default class IngredientsSelection extends React.Component {
    static navigationOptions = {
        title:"Vegetables"
    };
    render(){
        return(
            <View>
                <ScrollView>
                    <Ingredients name="broccoli"  imagesrc={require("../images/ingredients/broccoli.png")}/>
                    <Ingredients name="lettuce"  imagesrc={require("../images/ingredients/lettuce.png")}/>
                    <Ingredients name="cucumber"  imagesrc={require("../images/ingredients/cucumber.png")}/>
                    <Ingredients name="tomato"  imagesrc={require("../images/ingredients/tomato.png")}/>
                    <Ingredients name="garlic"  imagesrc={require("../images/ingredients/garlic.png")}/>
                    <Ingredients name="onion"  imagesrc={require("../images/ingredients/onion.png")}/>
                    <Ingredients name="lemon"  imagesrc={require("../images/ingredients/lemon.png")}/>
                    <Ingredients name="lime"  imagesrc={require("../images/ingredients/lime.png")}/>
                    <Ingredients name="basil"  imagesrc={require("../images/ingredients/basil.png")}/>
                </ScrollView>
                <IngredientsHandIn/>
            </View>
        )
    }
}