import React from 'react';
import type {Node} from 'react';
import {
    ScrollView,
    ListView,
    StyleSheet,
    FlatList,
    View,
    StatusBar,
    SectionList,
    Text
} from 'react-native';

import Article from "./Article";
// import Header from "./Header";

const Articles = (props): Node => {
    const {articles} = props;
    /* const _renderArticles = (articles) => {
        return articles.map((article, index) => <Article
            key={index}
            title={article.title}
            imageUrl={article.imageUrl}
            body={article.body}/>);
    };
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {_renderArticles(articles)}
        </ScrollView>
    ); */
    const _renderFlatListArticle = article => {
        return <Article
            title={article.title}
            imageUrl={article.imageUrl}
            body={article.body}/>;
    }
    return (
        <View style={{flex: 1}}>
            <StatusBar backgroundColor="blue"/>
            <FlatList
                data={articles}
                renderItem={({item}) => _renderFlatListArticle(item)}
                keyExtractor={(item, index) => index}
                // ListHeaderComponent={() => <Header/>}
                numColumns:{2}
                columnWrapperStyle:{{flexDirection: 'row-reverse'}}
            />
        </View>
    );
    /* const data = [
        {data: ['سپیده', 'سحر'], key: 'س'},
        {data: ['گلبری', 'گلی', 'گلنوش'], key: 'گ'},
        {data: ['بهرخ', 'بهناز', 'بهارا'], key: 'ب'},
    ];
    return (
        <SectionList
            sections={data}
            keyExtractor={(item, index) => index}
            renderItem={({item}) => <Text style={{fontSize: 18, padding: 10, color: 'green'}}>{item}</Text>}
            renderSectionHeader={({section}) => <Text
                style={{fontSize: 18, padding: 10, color: 'red'}}>{section.key}</Text>}
        />
    ); */
}

/* const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        margin: 10
    }
}); */

export default Articles;

