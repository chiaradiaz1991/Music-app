import { gql } from "@apollo/client";

export const ARTISTS_QUERY = gql`
  query getArtists($artist: String!) {
    search {
      artists(query: $artist) {
        nodes {
          id
          name
          country
          type
          lastFM {
            name
            image
            listenerCount
            playCount
          }
          discogs {
            realName
            profile
            dataQuality
          }
          lifeSpan {
            begin
            end
            ended
          }
        }
      }
    }
  }
`;
