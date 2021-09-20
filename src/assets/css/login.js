import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#2980b9',
        flex: 1
    },
    main: {
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
        fontFamily: 'IRANSansMobile',
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
        ...Platform.select({
            ios: {
                fontFamily: 'IRANSansMobile',
                fontWeight: '500'
            },
            android: {
                fontFamily: 'IRANSansMobile_Medium'
            },
            default: {
                fontFamily: 'IRANSansMobile_Medium'
            }
        }),
        textAlign: 'right',
        marginBottom: 10,
        color: '#5256c9',
    },
    inputText: {
        fontFamily: 'IRANSansMobile_Light',
        textAlign: 'right',
        borderColor: 'rgba(0, 0, 0, .1)',
        borderWidth: 1,
        padding: 10,
        borderRadius: 3,
        height: 40,
        fontSize: 12
    },
    loginButton: {
        fontFamily: 'IRANSansMobile',
        backgroundColor: '#426bd7',
        color: 'white',
        marginTop: 15,
        marginRight: 25,
        marginLeft: 25,
        textAlign: 'center',
        padding: 10,
        borderRadius: 20,
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: .1,
        overflow: 'hidden'
    },
    forgetPassword: {
        fontFamily: 'IRANSansMobile',
        textAlign: 'center',
        marginTop: 10
    }
});