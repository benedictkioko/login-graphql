import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache,
  concat,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const httpLink = new HttpLink({ uri: "http://localhost:8000/api/v1/" });

// Log any GraphQL errors or network error that occurred
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem("state");
  // add the authorization to the headers
  if (token) {
    const jwt = JSON.parse(token)["auth"]["accessToken"];
    operation.setContext({
      headers: {
        authorization: token ? `JWT ${jwt}` : "",
      },
    });
  }

  return forward(operation);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: errorLink.concat(concat(authMiddleware, httpLink)),
  credentials: "include",
  onError: (error) => error,
});

export { client };
