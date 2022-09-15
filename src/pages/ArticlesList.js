import React from 'react';
import ArticlePage from './ArticlePage';
import {Link} from 'react-router-dom';

const ArticlesList = () => (
    <>
        <h1>Articles</h1>
        <ul>Danh sách bài viết hỗ trợ anh chị</ul>
        <Link><h3>{ArticlePage}</h3></Link>
    </>    
);

export default ArticlesList;