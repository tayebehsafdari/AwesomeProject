import React from 'react';
import type {Node} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import {styles} from './../assets/css/login';

const Login = () => {
    return <View style={styles.container}>
        <View style={styles.loginBox}>
            <Text style={styles.loginTitle}>ورود</Text>
            <View style={styles.inputGroups}>
                <Text style={styles.labelText}>ایمیل:</Text>
                <TextInput
                    style={styles.inputText}
                    underlineColorAndroid="transparent"
                    placeholder="لطفا ایمیل خود را وارد کنید"/>
            </View>
            <View style={styles.inputGroups}>
                <Text style={styles.labelText}>پسورد:</Text>
                <TextInput
                    style={styles.inputText}
                    underlineColorAndroid="transparent"
                    secureTextEntry={true}
                    placeholder="لطفا پسورد خود را وارد کنید"/>
            </View>
            <TouchableOpacity>
                <Text style={styles.loginButton}>ورود به اپلیکیشن</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.forgetPassword}>فراموشی رمز عبور</Text>
            </TouchableOpacity>
        </View>
    </View>;
}

export default Login;

