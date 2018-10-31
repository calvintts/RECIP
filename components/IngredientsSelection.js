import React from "react";
import styles from '../designs/stylings';
import {TouchableOpacity, Text, ScrollView} from "react-native";

const IngredientList = [
    {
        title: 'Protein',
        content: [
            { name: 'chicken', selected: false,}
        ],
    },
    {
        title: 'Vegetable',
        content: [
            { name: 'broccoli', selected: false},
            { name: 'lettuce', selected: false},
            { name: 'cucumber', selected: false},
            { name: 'garlic', selected: false},
            { name: 'onion', selected: false}
        ],
    },
    {
        title: 'Condiments',
        content: [
            { name: 'salt', selected: false},
            { name: 'pepper', selected: false},
            { name: 'lemon', selected: false},
            { name: 'paprika', selected: false},
            { name: 'cumin', selected: false},
            { name: 'soy sauce', selected: false},
            { name: 'butter', selected: false},
            { name: 'milk', selected: false},
        ],
    },
]

export default class IngredientsSelection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: IngredientList[0].title,
            content: IngredientList[0].content,
        };
    }

    changeMenu = (index) => {
        setState({
            title: IngredientList[index].title,
            content: IngredientList[index].content,
        })
    }

    render() {
        return (
            <ScrollView>
                <ScrollView horizontal={true} style={styles.horizontalMenu}>
                    {
                        IngredientList.map((menus, index) => {
                            return <TouchableOpacity key={index}
                                                     onPress={this.changeMenu(index)}
                                                     style={styles.menubar}>
                                <Text>{this.state.title}</Text>
                            </TouchableOpacity>
                        }, this)
                    }
                </ScrollView>
                <ListView data={this.state.content}
                          renderItem={({item}) => <Text>{item.name}</Text>}
                />
            </ScrollView>
        )
    }
};
