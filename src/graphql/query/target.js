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

export const FETCH_TARGET_DETAILS = gql`
  query fetchTargetDetails($id: Int!) {
    target(id: $id) {
      id
      name
      target
      asn
      ip
      sector {
        id
        category
      }
      country {
        country
        id
      }
      status
      notes
      subdomainSet {
        subdomain
        ip
        id
      }
      dnsserversSet {
        nameserver
        ip
        id
      }
      mxrecordsSet {
        mailserver
        priority
        ip
        id
      }
      txtrecordsSet {
        txtrecord
        id
      }
      employeeSet {
        firstName
        lastName
        work
        hometown
        birthday
        linkedinUrl
        gender
      }

      phoneNumberSet {
        phoneNumber
        employee {
          firstName
          lastName
        }
      }
      emailSet {
        id
        date
        email
        employee {
          firstName
          lastName
          gender
          linkedinUrl
          id
          studied
          currentCity
          phoneNumberSet {
            phoneNumber
          }
        }
      }
      serviceSet {
        id
        serverExtrainfo
        version
        port
        product
        name
        status
      }
    }
  }
`;
