import gql from "graphql-tag";

/**
 * Если пользуетесь VS Code, то расширение "Apollo GraphQL"
 * умеет подсвечивать синтаксис таких запросов, автодополнять
 * и показывать типы (см. screenshot.png).
 *
 * А еще можно смотреть схему прямо из IDE (см. schema.png).
 */

export default gql`
  query GetStationQuery($evaId: Int!) {
    stationWithEvaId(evaId: $evaId) {
      name
      location {
        latitude
        longitude
      }
      picture {
        url
      }
    }
  }
`;
