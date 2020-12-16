import { gql } from "@apollo/client";

export const ARTISTS_QUERY = gql`
  query getArtists($artist: String!) {
    search {
      artists(query: $artist) {
        nodes {
          id
          name
          country
          lastFM {
            listenerCount
          }
          discogs {
            profile
            dataQuality
          }
        }
      }
    }
  }
`;
