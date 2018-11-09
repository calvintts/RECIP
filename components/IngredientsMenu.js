import React from "react";
import styles from '../designs/stylings';
import {View, TouchableOpacity, Text, ScrollView, FlatList, Switch} from "react-native";

export default class IngredientsSelection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };

    render() {
        return (
            <View style={{padding: 20, justifyContent: 'center'}}>
                <ScrollView horizontal={true} style={styles.horizontalMenu} contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}>
                    {
                        this.state.ingredientList.map((menus, index) => {
                            return (<TouchableOpacity key={index}
                                                     onPress={() => this.changeMenu(index)}
                                                     style={styles.menuBar}>
                                <Text>{menus.title}</Text>
                            </TouchableOpacity>)
                        })
                    }
                </ScrollView>
                <FlatList data={this.state.content}
                          renderItem={({item}) =>
                              <View style={{ flexDirection: 'row'}}>
                                <Text>{item.key}</Text>
                                <Switch value={item.selected} onValueChange={(item, selected) => this.setState({selected: !selected})}/>
                              </View>}
                />
            </View>

        )
    }
};