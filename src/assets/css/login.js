import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2980b9',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    loginBox: {
        backgroundColor: 'white',
        flex: 1,
        marginRight: 50,
        marginLeft: 50,
        borderRadius: 5,
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: .1,
        paddingBottom: 20
    },
    loginTitle: {
        fontSize: 18,
        margin: 2,
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: 'center'
    },
    inputGroups: {
        margin: 2,
        marginLeft: 20,
        marginRight: 20
    },
    labelText: {
        textAlign: 'right',
        marginBottom: 10,
        color: '#5256c9',
        fontWeight: 'bold'
    },
    inputText: {
        textAlign: 'right',
        borderColor: 'rgba(0, 0, 0, .1)',
        borderWidth: 1,
        padding: 10,
        borderRadius: 3,
        height: 40
    },
    loginButton: {
        backgroundColor: '#426bd7',
        color: 'white',
        marginTop: 15,
        marginRight: 25,
        marginLeft: 25,
        textAlign: 'center'
    },
    forgetPassword: {}
});