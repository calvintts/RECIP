import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { View, Alert, TouchableOpacity} from "react-native";

export default class SettingPopup extends React.Component {
    render()
    {
        return(
            <TouchableOpacity onPress={()=>this.props.togglePopup}>
                <Ionicons style={{padding: 5}} name="md-settings" size={30} color="red"/>
            </TouchableOpacity>
        )
    }
}


