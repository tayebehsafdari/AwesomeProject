import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
    headerTitleStyle: {
        ...Platform.select({
            ios: {
                fontFamily: 'IRANSansMobile',
                fontWeight: 'bold'
            },
            android: {
                fontFamily: 'IRANSansMobile_Bold'
            },
            default: {
                fontFamily: 'IRANSansMobile_Bold'
            }
        }),
        // textAlign: 'right',
        margin: 10,
        color: '#333',
        fontSize: 18
    }
});

export default styles;