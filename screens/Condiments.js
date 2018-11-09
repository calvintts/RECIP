import React from "react";
import styles from '../designs/stylings';
import { Ingredients } from '../components/HeadComponents'
import {View, Text, ScrollView} from "react-native";

export default class IngredientsSelection extends React.Component {
    render(){
        return(
            <View>
                <ScrollView>
                    <Ingredients name="salt"/>
                    <Ingredients name="pepper"/>
                    <Ingredients name="thyme"/>
                    <Ingredients name="paprika"/>
                    <Ingredients name="cumin"/>
                    <Ingredients name="soy sauce"/>
                    <Ingredients name="butter"/>
                    <Ingredients name="milk"/>
                    <Ingredients name="rosemary"/>
                </ScrollView>
            </View>
        )
    }
}