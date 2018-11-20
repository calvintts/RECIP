import React from "react";
import styles from '../designs/stylings';
import {Ingredients, IngredientsHandIn} from '../components/HeadComponents'
import {View, Text, ScrollView} from "react-native";

export default class IngredientsSelection extends React.Component {
    static navigationOptions = {
        title:"Condiments"
    };
    render(){
        return(
            <View>
                <ScrollView>
                    <Ingredients name="salt"  imagesrc= {require("../images/ingredients/salt.png")}/>
                    <Ingredients name="pepper"  imagesrc= {require("../images/ingredients/pepper.png")}/>
                    <Ingredients name="thyme"  imagesrc= {require("../images/ingredients/thyme.png")}/>
                    <Ingredients name="paprika"  imagesrc= {require("../images/ingredients/paprika.png")}/>
                    <Ingredients name="cumin"  imagesrc= {require("../images/ingredients/cumin.png")}/>
                    <Ingredients name="soy sauce"  imagesrc= {require("../images/ingredients/soysauce.png")}/>
                    <Ingredients name="butter"  imagesrc= {require("../images/ingredients/butter.png")}/>
                    <Ingredients name="milk"  imagesrc= {require("../images/ingredients/milk.png")}/>
                    <Ingredients name="rosemary"  imagesrc= {require("../images/ingredients/rosemary.png")}/>
                </ScrollView>
                <IngredientsHandIn/>
            </View>
        )
    }
}