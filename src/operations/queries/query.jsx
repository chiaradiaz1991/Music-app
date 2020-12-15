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
          mediaWikiImages {
            descriptionURL
            canonicalTitle
            objectName
            descriptionHTML
            originalDateTimeHTML
            licenseShortName
          }
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
