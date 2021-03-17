import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache,
  concat,
} from "@apollo/client";

const httpLink = new HttpLink({ uri: "http://localhost:8000/api/v1/" });

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
  link: concat(authMiddleware, httpLink),
});

export { client };
