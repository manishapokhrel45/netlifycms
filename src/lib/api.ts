// src/lib/api.ts

import { GET_PRODUCTS } from '@/graphql/queries';
import client from './apolloClient';
import { ADD_PRODUCT, DELETE_PRODUCT } from '@/graphql/mutation';

export const fetchProducts = async () => {
  try {
    const { data } = await client.query({
      query: GET_PRODUCTS,
    });
    return data.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const createProduct = async (variables: {
  name: string;
  description: string;
  price: number;
  slug: string;
}) => {
  try {
    const { data } = await client.mutate({
      mutation: ADD_PRODUCT,
      variables,
    });
    return data.createProduct;
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
};

export const removeProduct = async (id: string) => {
  try {
    const { data } = await client.mutate({
      mutation: DELETE_PRODUCT,
      variables: { id },
    });
    return data.deleteProduct;
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
};
