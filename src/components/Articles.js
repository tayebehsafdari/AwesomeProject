import React, {useState, useEffect} from 'react';
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
import Article from "./Article";

const Articles = (): Node => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        setArticles([
            {
                title: 'React',
                imageUrl: './../assets/images/React.png',
                body: 'React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.'
            },
            {
                title: 'Redux',
                imageUrl: './../assets/images/Redux.png',
                body: 'Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook\'s Flux architecture, it was created by Dan Abramov and Andrew Clark.'
            },
            {
                title: 'Next.js',
                imageUrl: './../assets/images/NextJs.png',
                body: 'Next.js is an open-source development framework built on top of Node.js enabling React based web applications functionalities such as server-side rendering and generating static websites.'
            },
            {
                title: 'React Native',
                imageUrl: './../assets/images/ReactNative.png',
                body: 'React Native is an open-source UI software framework created by Facebook, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use the React framework along with native platform capabilities.'
            },
            {
                title: 'Progressive Web Apps',
                imageUrl: './../assets/images/ProgressiveWebApps.png',
                body: 'A progressive web application is a type of application software delivered through the web, built using common web technologies including HTML, CSS and JavaScript. It is intended to work on any platform that uses a standards-compliant browser, including both desktop and mobile devices.'
            },
        ]);
    }, []);

    return (
        <Article/>
    );
}

export default Articles;

