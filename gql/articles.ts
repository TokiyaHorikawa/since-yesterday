import gql from "graphql-tag";

export const ARTICLES_QUERY = gql`
  query {
    articles {
      id
      text
    }
  }
`;

export const ADD_ARTICLES = gql`
  mutation AddArticles($text: String = "") {
    insert_articles(objects: { text: $text })
  }
`;
