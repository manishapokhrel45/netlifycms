// src/graphql/mutations.ts

import { gql } from '@apollo/client';

export const ADD_PRODUCT = gql`
  mutation CreateProduct(
    $name: String!
    $description: String!
    $price: Int!
    $slug: String!
  ) {
    createProduct(
      data: {
        name: $name
        description: $description
        price: $price
        slug: $slug
      }
    ) {
      id
      name
      price
      description
      slug
      images {
        url
      }
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: ID!) {
    deleteProduct(where: { id: $id }) {
      id
      name
    }
  }
`;
