import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:4000',
  }),
});

export default client;

// resolvers: {
//   Movie: {
//     isLiked: () => false
//   },
//   Mutation: {
//     likeMovie: (_, { id }, { cache }) => {
//       cache.writeData({ id: `Movie:${id}`, data: { isLiked: true } });
//     },
//     unLikeMovie: (_, { id }, { cache }) => {
//       cache.writeData({ id: `Movie:${id}`, data: { isLiked: false } });
//     }
//   }
// }
