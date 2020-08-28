import gql from "graphql-tag";

export const ARTICLES_QUERY = gql`
  query {
    articles {
      id
      text
    }
  }
`;
