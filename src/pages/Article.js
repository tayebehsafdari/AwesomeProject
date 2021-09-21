import React from 'react';
import type {Node} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    Platform,
    ScrollView
} from 'react-native';

const Article = (props): Node => {
    const {title, imageUrl, body} = props;
    return (
        <ScrollView>
            <Image source={imageUrl} style={styles.image}/>
            <View style={{padding: 10}}>
                <Text style={styles.title}>{title}</Text>
                <Text
                    style={styles.body}
                    numberOfLines={5}
                >{body}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 120
    },
    title: {
        textAlign: 'right',
        fontSize: 16,
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
        })
    },
    body: {
        textAlign: 'right',
        fontFamily: 'IRANSansMobile',
        fontSize: 12
    }
});

export default Article;

