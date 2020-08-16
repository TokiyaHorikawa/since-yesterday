import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ArticleCards from '../components/ArticleCards'
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
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
           今日は『<span>昨日より</span>』
          </h1>

            <ArticleCards></ArticleCards>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>
      </div>
    </ApolloProvider>
  )
}
