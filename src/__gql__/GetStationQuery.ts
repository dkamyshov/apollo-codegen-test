/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetStationQuery
// ====================================================

export interface GetStationQuery_stationWithEvaId_location {
  __typename: "Location";
  latitude: number;
  longitude: number;
}

export interface GetStationQuery_stationWithEvaId_picture {
  __typename: "Picture";
  url: string;
}

export interface GetStationQuery_stationWithEvaId {
  __typename: "Station";
  name: string;
  location: GetStationQuery_stationWithEvaId_location | null;
  picture: GetStationQuery_stationWithEvaId_picture | null;
}

export interface GetStationQuery {
  stationWithEvaId: GetStationQuery_stationWithEvaId | null;
}

export interface GetStationQueryVariables {
  evaId: number;
}
