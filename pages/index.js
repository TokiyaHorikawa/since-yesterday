import Head from 'next/head'
import styles from '../styles/Home.module.css'

import ArticleCards from '../components/ArticleCards'

import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';

 const client = new ApolloClient({
     link: new HttpLink({
       uri: "http://localhost:8080/v1/graphql",
     }),
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
            Welcome to <a href="https://nextjs.org">Next.js!</a>
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
