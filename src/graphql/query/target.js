import { gql } from "apollo-boost";

export const GET_TARGETS = gql`
  query searchTargets {
    allTargets(search: "", n: 50, offset: 0) {
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
