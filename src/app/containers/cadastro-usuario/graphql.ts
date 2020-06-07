import gql from 'graphql-tag';

export const CREATE_ACCOUNT_MUTATION = gql`
  mutation CreateAccountMutation($firstName: String!, $lastName: String!, $email: String!, $password: String!){
    createUser(input: {
      email: $email,
      password: $password,
      firstName: $firstName,
      lastName: $lastName,
      userType: "work"
    }) {
      user{
        firstName
        lastName
        isActive
        avatar
        favoriteProjects{
          edges{
            node{
              name
              image
            }
          }
        }
      }
      token
    }
  }
  `;
