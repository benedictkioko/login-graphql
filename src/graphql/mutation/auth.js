import { gql } from "apollo-boost";

export const LOGIN_MUTATION = gql`
  mutation TokenAuth($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
      refreshToken
    }
  }
`;

export const REGISTER_MUTATION = gql`
  mutation CreateUser($username: String!, $password: String!, $email: String!) {
    createUser(username: $username, email: $email, password: $password) {
      user {
        id
        username
        email
      }
    }
  }
`;
