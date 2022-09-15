import * as React from 'react';
import { useParams } from 'react-router-dom';
import articleContent from './article-content';

const ArticlePage = () => {
    const [news, setNews] = React.useState(null);
    const {name} = useParams();

    React.useEffect(() => {articleContent(name).then(setNews)},[name]);

    return (
        <>
            <h1>{news.title}</h1>
            {news.content.map((paragraph,key) => (<p key={key}>{paragraph}</p>))}
        </>
    );
};

export default ArticlePage;