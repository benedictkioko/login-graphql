import { gql } from "apollo-boost";

export const GET_TARGETS = gql`
  query searchTargets($n: Int!, $offset: Int!, $search: String!) {
    allTargets(search: $search, n: $n, offset: $offset) {
      id
      name
      ip
      target
      status
      notes
      slug
      date
    }
  }
`;
