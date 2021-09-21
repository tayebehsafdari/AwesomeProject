import React from 'react';
import type {Node} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet, Platform
} from 'react-native';

const Article = (props): Node => {
    const {title, imageUrl, body} = props;
    return (
        <View style={styles.container}>
            <Image source={imageUrl} style={styles.image}/>
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.body}>{body}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 20},
        shadowOpacity: .2
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        textAlign: 'right',
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
    },
    body: {
        textAlign: 'right'
    }
});

export default Article;

