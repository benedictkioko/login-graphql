import { gql } from "apollo-boost";

export const DASH_STATS = gql`
  query totalCounts {
    dashStats {
      totalCountries
      totalTargets
      totalDomains
      totalServices
    }
  }
`;

export const GET_TARGETS = gql`
  query searchTargets($n: Int!, $offset: Int!, $search: String!) {
    allTargets(search: $search, n: $n, offset: $offset) {
      id
      name
      ip
      target
      country {
        country
      }
      status
      notes
      slug
      date
    }
  }
`;

export const GET_SEARCH_ENGINE_RESULTS = gql`
  query searchEngineResults($search: String!) {
    searchApi(query: $search) {
      results {
        title
        url
        description
      }
    }
  }
`;
