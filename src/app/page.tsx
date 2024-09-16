'use client';
import React from 'react';
import client from '../lib/apolloClient';
import { ApolloProvider } from '@apollo/client';
import Fetch from './fetch/page';

const MyApp = () => {
  return (
    <ApolloProvider client={client}>
      <Fetch />
    </ApolloProvider>
  );
};

export default MyApp;
