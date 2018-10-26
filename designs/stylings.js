import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        padding:20,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: '#00e6e6',
        backgroundColor: 'white'
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
        fontSize: 16,
        margin: 5,
    },
    form: {
        flex: 1,
        flexDirection: 'column',
        width: '70%',
        justifyContent: 'center'
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

});
