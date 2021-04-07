import { gql } from "apollo-boost";

export const GET_SECTORS = gql`
  query allSectors {
    allCategories {
      id
      category
    }
  }
`;

export const GET_COUNTRIES = gql`
  query allCountries {
    allCountries {
      id
      country
    }
  }
`;
