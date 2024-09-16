import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query {
    products {
      id
      name
      price
      description
      images {
        url
      }
    }
  }
`;
