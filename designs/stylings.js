import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        ...Platform.select({android: {
                underlineColorAndroid: 'transparent',
            },
        }),
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

    logo:{
        //flex: 2,
        alignSelf: 'center',
        justifyContent:'center',
        width: 400,
        resizeMode: 'contain',
        height: 250,
        marginBottom: 50,
    },

    button: {
        marginTop: 10,
        marginBottom: 10,
        height: 60,
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'red',
        backgroundColor: 'red',
    },

    disableButton: {
        marginTop: 10,
        marginBottom: 10,
        height: 60,
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
        borderColor: 'brown',
        borderWidth: 1,
        borderRadius: 10,
        textAlign:'center',
        color:'black',
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
});
