import React from 'react';
import {
    Button,
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
    Text,
} from 'react-native';
import {createBottomTabNavigator, createStackNavigator, createSwitchNavigator} from 'react-navigation';
import OtherScreen from "./screens/OtherScreen.js";
import HomeScreen from "./screens/HomeScreen.js";
import SignUpScreen from "./screens/SignUpScreen.js";
import LoginScreen from "./screens/LoginScreen.js";
import Proteins from "./screens/Proteins";
import Vegetables from "./screens/Vegetables";
import Condiments from "./screens/Condiments";
import UpdateIngredients from "./components/UpdateIngredients"
import {Ionicons} from "react-native-vector-icons";
import {Constants} from 'expo';
// import MainScreen from "./screens/MainScreen.js";


class AuthLoadingScreen extends React.Component {
    constructor() {
        super();
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        AsyncStorage.clear();
        const userToken = await AsyncStorage.getItem('userToken');

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };

    // Render any loading content that you like here
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor:'blue',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const FoodStack = createBottomTabNavigator({Proteins: Proteins, Vegetables: Vegetables, Condiments: Condiments},{
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'Proteins') {
                iconName = `ios-information-circle${focused ? '' : '-outline'}`;
            } else if (routeName === 'Vegetables') {
                iconName = `ios-options${focused ? '' : '-outline'}`;
            }else if (routeName === 'Condiments'){
                iconName = `ios-options${focused ? '' : '-outline'}`;
            }
            // You can return any component that you like here! We usually use an
            // icon component from react-native-vector-icons
            return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
    }),
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: false,
})

const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen, Food: FoodStack},{
    navigationOptions: ({ navigation }) => ({
        title: `Pick Your Ingredients`,
        headerRight: <UpdateIngredients/>,
    })
});
const AuthStack = createSwitchNavigator({ Login: LoginScreen, SignUp: SignUpScreen },{initialRouteName: 'Login',});


export default createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);
