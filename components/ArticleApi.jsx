import ArticleStyles from '../styles/ArticleApi.module.css';

const ArticleApi = ({articles}) => {
    return (
        <div className={ArticleStyles.grid}>
            {articles.map((article) => (
                    <div key={article.id}>
                        <h5>{`Title - ${article.title}`}</h5>
                        <p>{`Body - ${article.body}`}</p>
                        
                    </div>
                ))}
        </div>
    )
}

export default ArticleApi;