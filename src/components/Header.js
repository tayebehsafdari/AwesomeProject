import React from 'react';
import type {Node} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const Header = (): Node => {
    return (
        <View style={styles.headerView}>
            <Text style={styles.headerText}>مجله آموزشی طیبه صفدری دوست</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerView: {
        backgroundColor: '#7f8c8d',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 18,
        color: 'white',
        fontFamily: 'IRANSansMobile'
    }
});

export default Header;

