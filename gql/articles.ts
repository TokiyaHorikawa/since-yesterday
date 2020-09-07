import gql from "graphql-tag";

export const ARTICLES_QUERY = gql`
  query {
    articles {
      id
      text
    }
  }
`;

export const ARTICLES_SUBSCRIPTIONS = gql`
  subscription ArticlesSubscriptions {
    articles(limit: 30, order_by: { created_at: asc }) {
      date
      id
      text
    }
  }
`;

export const ADD_ARTICLES = gql`
  mutation AddArticles($text: String = "", $date: date = "") {
    insert_articles(objects: { text: $text, date: $date }) {
      returning {
        id
        text
        date
      }
    }
  }
`;
