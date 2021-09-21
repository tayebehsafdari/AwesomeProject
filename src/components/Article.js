import React from 'react';
import type {Node} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    Platform,
    Dimensions,
    TouchableWithoutFeedback
} from 'react-native';

const Article = (props): Node => {
    const {title, imageUrl, body} = props;
    const {navigate} = props.navigation;
    return (
        <TouchableWithoutFeedback onPress={() => navigate('Article', {
            article: {
                title,
                imageUrl,
                body
            }
        })}>
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
        </TouchableWithoutFeedback>
    );
}
const {width, height} = Dimensions.get('window');
const gutter = 10;

const styles = StyleSheet.create({
    container: {
        // width: (width - gutter * 3) / 2,
        flex: .5,
        margin: 5,
        backgroundColor: 'white',
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 20},
        shadowOpacity: .2,
        // marginBottom: 10
    },
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
                fontWeight: 'bold',
                textAlign: 'left'
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

