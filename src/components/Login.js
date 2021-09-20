import React from 'react';
import type {Node} from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from './../assets/css/login';

const Login = () => {
    return <View style={styles.container}>
        <View style={styles.loginBox}>
            <Text style={styles.loginTitle}>ورود</Text>
            <View style={styles.inputGroups}>
                <Text style={styles.labelText}>ایمیل:</Text>
                <TextInput style={styles.inputText} placeholder="لطفا ایمیل خود را وارد کنید"/>
            </View>
        </View>
    </View>;
}

export default Login;

