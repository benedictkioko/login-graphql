import { createHttpLink } from "apollo-link-http";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";

const client = new ApolloClient({
  link: createHttpLink({ uri: "http://localhost:8000/api/v1/" }),
  cache: new InMemoryCache(),
  credetials: "include",
});

export { client };
