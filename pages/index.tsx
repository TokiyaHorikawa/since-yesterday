import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ArticleCards from '../components/ArticleCards'
import AddArticleFab from '../components/AddArticleFab'
import { ApolloProvider } from '@apollo/react-hooks';
import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

 const client = new ApolloClient({
   uri: "http://localhost:8080/v1/graphql",
   cache: new InMemoryCache(),
 });

export default function Home() {
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
          <AddArticleFab></AddArticleFab>
        </main>
      </div>
    </ApolloProvider>
  );
}
