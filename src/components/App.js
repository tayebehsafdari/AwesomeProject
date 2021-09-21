import React from 'react';
import type {Node} from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "../pages/Home";
import Article from "../pages/Article";


const Stack = createNativeStackNavigator();
const App: ()  =>Node = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    // options:{{title: 'مجله آموزشی طیبه صفدری دوست'}}
                    options:{{headerTitle: <Text>مجله آموزشی طیبه صفدری دوست</Text>}}
                />
                <Stack.Screen
                    name="Article"
                    component={Article}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;

