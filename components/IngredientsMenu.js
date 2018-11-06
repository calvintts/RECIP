import React from "react";
import styles from '../designs/stylings';
import {View, TouchableOpacity, Text, ScrollView, FlatList, Switch} from "react-native";

export default class IngredientsSelection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredientList :  [
                {
                    title: 'Protein',
                    content: [
                        {key: 'chicken', selected: false},
                    ],
                },
                {
                    title: 'Vegetable',
                    content: [
                        {key: 'broccoli', selected: false},
                        {key: 'lettuce', selected: false},
                        {key: 'cucumber', selected: false},
                        {key: 'garlic', selected: false},
                        {key: 'onion', selected: false}
                    ],
                },
                {
                    title: 'Condiments',
                    content: [
                        {key: 'salt', selected: false},
                        {key: 'pepper', selected: false},
                        {key: 'lemon', selected: false},
                        {key: 'paprika', selected: false},
                        {key: 'cumin', selected: false},
                        {key: 'soy sauce', selected: false},
                        {key: 'butter', selected: false},
                        {key: 'milk', selected: false},
                    ],
                },
            ],
            title: this.state.ingredientList[0].title,
            content: this.state.ingredientList[0].content,
        };
    };


    changeMenu = (index) => {
        if (this.state.title !== this.state.ingredientList[index].title) {
            //console.log(index);
            this.setState({
                title: this.state.ingredientList[index].title,
                content: this.state.ingredientList[index].content,
            })
        }
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
                                <Switch value={item.selected} onValueChange={() => this.setState(this.state.content.map(item=>{ return item.selected===this.value? !item.selected:item.selected}))}/>
                              </View>}
                />
            </View>

        )
    }
};