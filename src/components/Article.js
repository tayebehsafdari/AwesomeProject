import React from 'react';
import type {Node} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    Platform,
    Dimensions
} from 'react-native';

const Article = (props): Node => {
    const {title, imageUrl, body} = props;
    return (
        <View style={styles.container}>
            <Image source={imageUrl} style={styles.image}/>
            <View style={{padding: 10}}>
                <Text style={styles.title}>{title}</Text>
                <Text
                    style={styles.body}
                    numberOfLines={5}
                >{body}</Text>
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
        shadowOpacity: .2,
        marginBottom: 10
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        textAlign: 'right',
        fontSize: 18,
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
    },
    body: {
        textAlign: 'right',
        fontFamily: 'IRANSansMobile'
    }
});

export default Article;

