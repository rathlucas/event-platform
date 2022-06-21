import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o4szci0lob01z21h7wb77m/master',
  cache: new InMemoryCache(),
});
