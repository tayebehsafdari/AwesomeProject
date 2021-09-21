import React from 'react';
import type {Node} from 'react';
import {ScrollView} from 'react-native';

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
        <ScrollView>
            {_renderArticles(articles)}
        </ScrollView>
    );
}

export default Articles;

