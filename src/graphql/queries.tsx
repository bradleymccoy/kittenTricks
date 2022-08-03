import gql from 'graphql-tag';

export const LIST_WORKOUTS = gql`query MyQuery {
  listWorkoutData {
    items {
      group
      description
      id
      name
    }
    nextToken
  }
}
`
