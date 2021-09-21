import React from 'react';
import type {Node} from 'react';
import {
    ScrollView,
    ListView,
    StyleSheet
} from 'react-native';

import Article from "./Article";

const Articles = (props): Node => {
    const {articles} = props;
    const _renderArticles = (articles) => {
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
    );
}

const styles = StyleSheet.create({
    container: {}
});

export default Articles;

