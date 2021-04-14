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

export const GET_COUNTRIES_STATS = gql`
  query stats {
    targetStats {
      stats
    }
  }
`;
