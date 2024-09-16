import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://ap-south-1.cdn.hygraph.com/content/cm0xya29300v207v240blpg6f/master',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MjYwNjQ1OTMsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmh5Z3JhcGguY29tL3YyL2NtMHh5YTI5MzAwdjIwN3YyNDBibHBnNmYvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQtYXAtc291dGgtMS5oeWdyYXBoLmNvbS8iLCJzdWIiOiIzYWE4Mzk4ZS1jNTRiLTRhM2QtOTBkZC1lZjZkM2IxMzRiZjUiLCJqdGkiOiJja2x1emJybHA1b2w5MDF4djczMjU4dGpkIn0.NdMF0DFAGbpImTQYub7DvSzXFvikbIjp9pEvuhbrwioZDzVOM9vFgWOYS6nbuk11c8-A3L7aRv8SlIQSxBevuc6FOk6R-4sopTkK6mdvu-vJEu2LmKygclNl-b159oBHwB8GMr5pDbu4J6FMTlzJxhJT3XDTqRff7IdAVoVy9WyijjpkI5zVbQjS-dQPQ8ImkGYij1fxW-PkQOjBqJM6M34KGFLxo0nN9a0eszdeZhs6ErBtVTGHWOABPKiCDs7lKD-3j2i0kS-PVlSCA9wFIqVxWov687oOSx46m0F1BrTKmP5StQxv021s7fKFVFvLTZ0-ZBeW30goplMmzzc8mNs-xukNAq5UL4-JjmoI74lcbvaWqoQxBHOQemjxAsc8JWwNgHlxqcwYTkOQobVoLBPZLDuHxvthcLmUqV2D5PUAIgIV23HLwA7ZAPxnc_tDyrDQcidklClKSde1h5QmSNJcOzhXkFo2FPzDyVxPYc9SjVXLHd_z6R6Nuecy8VgXbxgxVSuQ09Zo3yNwfMu9ZaUzJuoOsvS-l-wDoFsI0ccNcZ9Qnhq0inMQYgAMxKlYUJICOvebMqjsSfJMmCppwa1AWaVgKb818J4KavJduVkgPXag2rt9O5KmsiKOIP5JnzLqN45NbFt0BzVkPKmomp6NiAJX_062E4uFLixjjWU`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
