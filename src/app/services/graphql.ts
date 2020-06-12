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

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!){
    tokenAuth(input:{
      email: $email,
      password: $password
    }) {
      token,
      user{
        favoriteProjects{
          edges{
            node{
              id,
              name
            }
          }
        }
      }
    }
  }
  `;

export const GET_QUADROS = gql`
  query {
    projects{
      edges{
        node{
          id
          name
          image
        }
      }
    }
  }
  `;

export const GET_TIMES = gql`
  query {
    teams{
     edges{
       node{
         id,
         name,
         icon
       }
     }
   }
   }
  `;

export const CREATE_QUADRO_FAV = gql`
  mutation {
    createFavoriteProject(input:{
      projectId: "UHJvamVjdHNUeXBlOmJhZTZiYjU4LTcyYzAtNDU0NC04NWY4LTZmZWFkZDRjZDEwZA=="
    }){
      success
    }
  }
  `;

export const CREATE_TEAM = gql`
  mutation {
    createTeam(input: {
      name: "Time teste",
      description: "Lorem ipsum",
      emails: ["teeeste@dev.com", "tesaate@dev.com",]
    }) {
      success
    }
  }
  `;

export const GET_DADOS_QUADRO = gql`
  query {
    projectDetail(id:"bae6bb58-72c0-4544-85f8-6feadd4cd10d"){
      id,
      team{
        edges{
          node{
            id,
            users{
              edges{
                node{
                  id,
                  firstName,
                  lastName
                }
              }
            }
            name
          }
        }
      },
      name,
      image
    }
  }
  `;
