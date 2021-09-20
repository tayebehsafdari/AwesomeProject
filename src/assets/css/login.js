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
        height: 200,
        marginRight: 50,
        marginLeft: 50,
        borderRadius: 5,
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: .1
    }
});