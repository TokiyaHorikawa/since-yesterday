import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks'

const OUR_FIRST_QUERY = gql`
 query {
   articles {
     id
     text
   }
 }
`;

interface ArticleType {
  id: string;
  text: string;
}

const Article = (article: ArticleType) => {
  return <p>{article.id}: {article.text}</p>
}

const ArticleCards = () => {
  const { loading, error, data } = useQuery(OUR_FIRST_QUERY)
  // ローディング中の表示
  if (loading) return <p>loading</p>
  // エラー時の表示
  if (error) return <p>{error.toString()}</p>
  //　成功してデータが帰ってきた時の表示
  return <div>
    {
      data.articles.map((article: ArticleType) => <Article {...article}></Article>)
    }
  </div>
}

export default ArticleCards
