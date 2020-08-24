import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks'
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import articleStyle from '../styles/ArticleCards.module.css';

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
  return (
    <Card variant="outlined" className={articleStyle.card}>
      <CardContent>
        <Typography variant="body2" component="p">
          {article.text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">MORE</Button>
      </CardActions>
    </Card>
  );
}

const ArticleCards = () => {
  const { loading, error, data } = useQuery(OUR_FIRST_QUERY)
  // ローディング中の表示
  if (loading) return <p>loading</p>
  // エラー時の表示
  if (error) return <p>{error.toString()}</p>
  //　成功してデータが帰ってきた時の表示
  return (
    <div className={articleStyle.article}>
      {data.articles.map((article: ArticleType) => (
        <Article {...article} key={article.id}></Article>
      ))}
    </div>
  );
}

export default ArticleCards
