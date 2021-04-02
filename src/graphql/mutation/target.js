import { gql } from "apollo-boost";

export const CREATE_TARGET_MUTATION = gql`
  mutation createTarget($input: TargetInput!) {
    createTarget(input: $input) {
      ok
      target {
        id
        ip
        target
      }
    }
  }
`;
