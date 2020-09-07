import React, { useRef, useState } from "react";
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { ApolloProvider } from '@apollo/react-hooks';
import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import ArticleCards from '../components/ArticleCards'
import AddArticleFab from '../components/AddArticleFab'
import FormDialog from '../components/FormDialog'

 const client = new ApolloClient({
  link: new WebSocketLink({
    uri: 'ws://localhost:8080/v1/graphql',
    options: {
      reconnect: true,
       connectionParams: {
          headers: {
          }
       }
    }
  }),
  cache: new InMemoryCache(),
 });

export default function Home() {
  const [open, setOpen] = useState(false)
  const changeShowDialogState = () => {
    setOpen(!open)
  }
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
          <AddArticleFab openHandler={changeShowDialogState}></AddArticleFab>
          <FormDialog open={open} closeHandler={changeShowDialogState}></FormDialog>
        </main>
      </div>
    </ApolloProvider>
  );
}
