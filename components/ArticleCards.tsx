import { useSubscription } from '@apollo/react-hooks'
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { ARTICLES_SUBSCRIPTIONS } from '../gql/articles';

interface ArticleType {
  id: string;
  text: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    article: {
      marginTop: "50px",
    },
    card: {
      marginBottom: "5px",
    },
    cardActionsBtn: {
      marginLeft: "auto",
    },
  })
);

const Article = (article: ArticleType) => {
  const classes = useStyles();
  return (
    <Card variant="outlined" className={classes.card}>
      <CardContent>
        <Typography variant="body2" component="p">
          {article.text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className={classes.cardActionsBtn}>
          Edit
        </Button>
      </CardActions>
    </Card>
  );
}

const ArticleCards = () => {
  const classes = useStyles();
  const { loading, error, data} = useSubscription(ARTICLES_SUBSCRIPTIONS);
  console.log(data)
  // ローディング中の表示
  if (loading) return <p>loading</p>
  // エラー時の表示
  if (error) return <p>{error.toString()}</p>
  //　成功してデータが帰ってきた時の表示
  return (
    <div className={classes.article}>
      {data.articles.map((article: ArticleType) => (
        <Article {...article} key={article.id}></Article>
      ))}
    </div>
  );
}

export default ArticleCards
