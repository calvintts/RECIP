import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },

    form: {
        flex: 1,
        flexDirection: 'column',
        width: '80%',
        justifyContent: 'center'
    },

    buttonMainWrap: {
        //flex: 3,
        flexDirection: 'column',
        width: '60%',
        justifyContent: 'center',
    },

    logoSmall:{
        //flex: 2,
        alignSelf: 'center',
        justifyContent:'center',
        width: 300,
        resizeMode: 'contain',
        height: 150,
        marginBottom: 30,
    },

    button: {
        marginTop: 10,
        height: 45,
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'red',
        backgroundColor: 'red',
    },

    disableButton: {
        marginTop: 10,
        marginBottom: 5,
        height: 45,
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'grey',
        backgroundColor: 'grey',
    },

    textLabel: {
        fontSize: 15,
        margin: 5,
    },

    formInput:{
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 10,
        textAlign:'center',
        color: 'black',
        width: '100%',
        height: 45,
    },

    errorMessage:{
        fontSize: 12,
        color: 'red',
    },

    errorView: {
        flex: 1,
        alignItems: 'flex-end',
        marginTop: 8,
    },

    oauthForm: {
        marginBottom: 10,
    },

    horizontalMenu: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
    },

    menuBar: {
        backgroundColor: 'blue',
        padding: 5,
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
    },
    ingredientsView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        borderRadius: 1,
        borderWidth: 0.3,
        borderColor: 'red'
    },
    ingredientsText: {

    },
    ingredientsSwitch: {
        alignSelf:'center'
    }
});
