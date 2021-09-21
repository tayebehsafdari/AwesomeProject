import React, {useState} from 'react';
import type {Node} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    TouchableNativeFeedback
} from 'react-native';
import {styles} from './../assets/css/login';
import LinearGradient from "react-native-linear-gradient";

const Login = (): Node => {
    const [colorLoginButtonHText, setColorLoginButtonHText] = useState({
        color: 'white'
    });
    const _login = () => {
        console.log('OK');
    }

    return (
        <View style={styles.container}>
            <LinearGradient colors={['#3181e5', '#594dc2']} style={styles.main}>
                <View style={styles.loginBox}>
                    <Text style={styles.loginTitle}>ورود</Text>
                    <View style={styles.inputGroups}>
                        <Text style={styles.labelText}>ایمیل:</Text>
                        <TextInput
                            style={styles.inputText}
                            underlineColorAndroid="transparent"
                            placeholder="لطفا ایمیل خود را وارد کنید"
                        />
                    </View>
                    <View style={styles.inputGroups}>
                        <Text style={styles.labelText}>پسورد:</Text>
                        <TextInput
                            style={styles.inputText}
                            underlineColorAndroid="transparent"
                            secureTextEntry={true}
                            placeholder="لطفا پسورد خود را وارد کنید"
                        />
                    </View>
                    <TouchableOpacity activeOpacity={.8}>
                        <Text style={styles.loginButton}>ورود به اپلیکیشن</Text>
                    </TouchableOpacity>
                    <TouchableHighlight
                        onPress={_login}
                        style={styles.loginButtonH}
                        underlayColor={"yellow"}
                        onShowUnderlay={() => setColorLoginButtonHText({
                            color: 'black'
                        })}
                        onHideUnderlay={() => setColorLoginButtonHText({
                            color: 'white'
                        })}
                    >
                        <Text style={[styles.loginButtonHText, colorLoginButtonHText]}>ورود به اپلیکیشن</Text>
                    </TouchableHighlight>
                    <TouchableNativeFeedback
                        background={TouchableNativeFeedback.Ripple('rgba(0, 0, 0, 1)')}
                    >
                        <View style={styles.loginButtonH}>
                            <Text style={[styles.loginButtonHText, colorLoginButtonHText]}>ورود به اپلیکیشن</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableOpacity>
                        <Text style={styles.forgetPassword}>فراموشی رمز عبور</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </View>
    );
}

export default Login;

