import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity} from "react-native";

export default class UpdateIngredients extends React.Component {
    render()
    {
        return(
            <TouchableOpacity onPress={()=>alert("implement later")}>
                <Ionicons name="ios-add" size={35} style={{padding:5}} color="red"/>
            </TouchableOpacity>
        )
    }
}


