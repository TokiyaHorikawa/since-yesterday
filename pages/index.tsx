import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ArticleCards from '../components/ArticleCards'
import { ApolloProvider } from '@apollo/react-hooks';
import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import {
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";

 const client = new ApolloClient({
   uri: "http://localhost:8080/v1/graphql",
   cache: new InMemoryCache(),
 });

 const useStyles = makeStyles((theme: Theme) =>
  createStyles({
     fab: {
       position: 'absolute',
       bottom: theme.spacing(5),
       right: theme.spacing(2)
     }
   })
 )

export default function Home() {
  const classes = useStyles()
  return (
    <ApolloProvider client={client}>
      <div className={styles.container}>
        <Head>
          <title>今日は『昨日より』</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            今日は『<span>昨日より</span>』
          </h1>
          <ArticleCards></ArticleCards>
          <Fab
            className={classes.fab}
            size="medium"
            aria-label="add"
            color="primary"
          >
            <AddIcon></AddIcon>
          </Fab>
        </main>
      </div>
    </ApolloProvider>
  );
}
